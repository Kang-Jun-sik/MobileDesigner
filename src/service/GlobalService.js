import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import 'jquery-contextmenu';

import {mobileDesignerToIDE} from "@/utils/mobileDesignerToIDE";
import GlobalService from "@/service/GlobalService";
import ResizeService from "@/service/ResizeService";
import ControlService from "@/service/ControlService";
import ContextMenuService from "@/service/ContextMenuService";

import Button from "@/components/Controls/DewsButton";
import SearchContainer from "@/components/Containers/SearchContainer";

export default {
    /**
     * 페이지 오픈 서비스 (EWP -> MOBILE DESIGNER PAGE Rendering)
     * @param args
     */
    openService(args) {
        //(1) IDE로부터 받은 데이터 전처리
        //let tdata = `{ "commandType":"open","data":"<?xml version=\\"1.0\\" encoding=\\"utf-8\\"?><page title=\\"141414\\" name=\\"12341\\" type=\\"mpage\\"><canvas uid=\\"canvas-1485142915100\\" type=\\"mpage\\" title=\\"141414\\" component=\\"\\" function=\\"\\"><pageInformation><version>1.0</version><create>kjs1436</create><builddate d4p1:nil=\\"true\\" xmlns:d4p1=\\"http://www.w3.org/2001/XMLSchema-instance\\" /><createdate>2020-09-17T16:15:16.7463121+09:00</createdate><modifieddate d4p1:nil=\\"true\\" xmlns:d4p1=\\"http://www.w3.org/2001/XMLSchema-instance\\" /></pageInformation><mainButtons uid=\\"mainButtons-1385142915113\\"><mainButton uid=\\"mainButton-1485142971049\\" id=\\"information\\" buttonAttr=\\"disabled\\" type=\\"information\\" /><mainButton uid=\\"mainButton-1485142971050\\" id=\\"localize\\" buttonAttr=\\"disabled\\" type=\\"localize\\" /><mainButton uid=\\"mainButton-1485142971051\\" id=\\"approval\\" buttonAttr=\\"normal\\" type=\\"approval\\" /><mainButton uid=\\"mainButton-1485142971052\\" id=\\"add\\" buttonAttr=\\"normal\\" type=\\"add\\" /><mainButton uid=\\"mainButton-1485142971053\\" id=\\"search\\" buttonAttr=\\"normal\\" type=\\"search\\" /><mainButton uid=\\"mainButton-1485142971054\\" id=\\"delete\\" buttonAttr=\\"normal\\" type=\\"delete\\" /><mainButton uid=\\"mainButton-1485142971055\\" id=\\"print\\" buttonAttr=\\"normal\\" type=\\"print\\" /><mainButton uid=\\"mainButton-1485142971056\\" id=\\"save\\" buttonAttr=\\"normal\\" type=\\"save\\" /><mainButton uid=\\"mainButton-1485142971057\\" id=\\"configure\\" buttonAttr=\\"normal\\" type=\\"configure\\" /></mainButtons><mLayout uid=\\"mLayout-1485142971058\\" id=\\"mlayout\\"><mButton uid=\\"mButton-1485142971058\\" id=\\"mbutton\\" buttonType=\\"normal\\" disabled=\\"false\\" /></mLayout></canvas><dataSources /><pageCssStyle><![CDATA[]]></pageCssStyle><stylesheets /><javascripts /><settings /><datas /></page>","localization":"ko-KR"}`;
        let obj = JSON.parse(args);
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(obj.data, "application/xml");
        //let canvasDoc = xmlDoc.getElementsByTagName('canvas')[0];
        let canvasDoc = xmlDoc.getElementsByTagName('mobile-page')[0];
        let type = canvasDoc.attributes.getNamedItem('type').nodeValue;
        let mPage = window.Vue.$store.state.component.items.find(item => item.uid.startsWith("mobile-page"));

        mPage.uid = canvasDoc.getAttribute('uid'); // 임시로 canvas에 uid 적용
        mPage.$el.setAttribute('uid', canvasDoc.getAttribute('uid')) // 임시로 canvas에 적용

        // eslint-disable-next-line no-empty
        if (type === 'mpage') {
            for (let i = 0; i < canvasDoc.childElementCount; i++) {
                if (canvasDoc.children[i].tagName === "pageInformation")
                    continue;
                if (canvasDoc.children[i].tagName === "mainButtons")
                    // eslint-disable-next-line no-empty
                {

                } else {
                    GlobalService.PageParsing(canvasDoc.children[i], mPage.uid);
                    //pageParsing(canvasDoc.children[i], mPage.uid);
                }
            }
        }
    },

    /**
     * Recursive Function For Control Rendering
     */
    PageParsing(node, parentUid) {
        let clone = node.cloneNode();
        let instance = GlobalService.createControlFromData(clone);
        let parent = window.Vue.$store.state.component.items.find(item => item.uid === parentUid);
        parent.$el.appendChild(instance.$el);

        if (node.childElementCount === 0) return;
        for (let i = 0; i < node.childElementCount; i++) {
            GlobalService.PageParsing(node.children[i], instance.uid);
        }
    },

    /**
     * Xml Data --> Create Control Logic
     */
    createControlFromData(clone) {
        const uid = clone.getAttribute('uid');
        const type = clone.tagName;
        let instance;
        switch (type) {
            case 'mobile-area':
                instance = ControlService.addComponent('SearchContainer');
                break;
            case 'mobile-button':
                instance = ControlService.addComponent('Button');
                break;
            case 'dews-area-panel':
                instance = ControlService.addComponent('AreaPanel');
                break;
            case 'mobile-item':
                instance = ControlService.addComponent('AreaItem');
                break;
            case 'dews-box':
                instance = ControlService.addComponent('AreaBox');
                break;
        }
        instance.uid = uid;
        instance.$el.setAttribute('uid', uid);
        window.Vue.$store.commit('addItem', instance);
        return instance;
    },

    /**
     * 디자이너 컨트롤 선택 서비스 (IDE --> MOBILE DESIGNER Control Selection)
     * @param args
     */
    selectFromIDEService(args) {
        //(1) uid를 추출한다.
        //(2) uid를 이용해 vuex에서 해당 componet의 $el을 가져온다.
        //(3) 해당 $el을 selectControl 함수의 파라미터로 넘겨준다.
        console.log(args);
        const message = JSON.parse(args);
        const uid = message['controlUniqueId'];
        let control = window.Vue.$store.state.component.items.find(item => item.uid === uid);
        GlobalService.selectControl(control.$el);
    },

    /**
     * 디자이너 키바인딩
     */
    keyBinding() {
        document.addEventListener('keydown', function (event) {
            const key = event.key;
            if (key === "Delete") {
                if (window.selectedItem.classList.contains('main-designer')) return;
                if (window.selectedItem) {
                    ControlService.sendDeleteMessage(window.selectedItem);
                    ControlService.deleteControl(window.selectedItem);
                }
            }
        });
    },

    /*
    * 컨트롤 선택 이벤트 등록
    **/
    selectControlEvent() {
        const $mainDesigner = document.querySelector('.main-designer-wrapper');
        $mainDesigner.addEventListener('mousedown', function (e) {
            const target = e.target;

            // 이벤트 위임 방법을 사용하여 선택한 AreaPanel만 보일수 있도록 로직 추가
            const panels = $mainDesigner.querySelectorAll('.dews-panel');
            Array.from(panels).forEach(panel => {
                if (panel.classList.contains('dews-panel-show')) {
                    panel.classList.add('dews-panel-hide');
                    panel.classList.remove('dews-panel-show');
                }
            });
            if (target.classList.contains('dews-panel')) {
                if (target.classList.contains('dews-panel-hide')) {
                    target.classList.add('dews-panel-show');
                    target.classList.remove('dews-panel-hide');
                }
            }

            GlobalService.selectControl(target);
            e.preventDefault();
        })
    },

    /*
    * 컨트롤 선택 이벤트 실행
    * @param eventTarget - 선택한 컨트롤
    **/
    selectControl(eventTarget) {
        let target = eventTarget.classList.contains('dews-mobile-component') ? eventTarget : findTarget(eventTarget);

        // 같은 컨트롤을 선택했을 경우 재 선택하는 것을 방지 / target이 null인 경우 return (dews-mobile-component가 아님)
        if ((window.selectedItem && window.selectedItem === target) || target === null) return;

        if (document.querySelector('.selected')) {
            const selectedElement = document.querySelector('.selected');
            selectedElement.classList.remove('selected');
            // 이 전에 선택된 element resizable disabled 처리
            $(`[uid=${selectedElement.getAttribute('uid')}]`).resizable({
                disabled: true
            })
        }
        GlobalService.removeSelectHandler();
        ResizeService.removeResizeHandler();

        window.selectedItem = target;
        window.selectedItem.classList.add('selected');

        // main-designer의 경우 resize 표시가 필요없으므로 canResize를 호출하지 않는다.
        if (!target.classList.contains('main-designer')) {
            if (!target.classList.contains('dews-box-wrap')
                && !target.classList.contains('dews-panel')) {
                ResizeService.canResize(target);
            }
            GlobalService.showSelectHandler(target);
        }

        ContextMenuService.destroyContextMenu();
        ContextMenuService.getContextMenu(window.selectedItem);
        mobileDesignerToIDE("select", window.selectedItem); // IDE로 선택되었다고 메세지 송신

        function findTarget(target) {
            return target.closest('.dews-mobile-component');
        }
    },

    showSelectHandler(element) {
        const $element = element;
        const handles = ["n", "e", "s", "w", "ne", "se", "sw", "nw"];

        handles.forEach(handle => {
            let newHandle = document.createElement('div');
            newHandle.className = `dews-control-handle handle-${handle}`;
            $element.appendChild(newHandle);
        })

        ResizeService.setPosition($element);
    },

    removeSelectHandler() {
        const handles = document.querySelectorAll('.dews-control-handle');
        Array.from(handles).forEach(handle => handle.remove());
    }
}
