import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import 'jquery-contextmenu';

import {mobileDesignerToIDE} from "@/utils/mobileDesignerToIDE";

import GlobalService from "@/service/GlobalService";
import ResizeService from "@/service/ResizeService";
import ControlService from "@/service/ControlService";
import ContextMenuService from "@/service/ContextMenuService";

import Button from "@/components/Controls/ButtonComponent";
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
        let mPage = window.Vue.$store.state.items.find(item => item.uid.startsWith("mobile-page"));

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
                    pageParsing(canvasDoc.children[i], mPage.uid);
                }
            }
        }

        function createControl(clone) {
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
            }
            instance.uid = uid;
            instance.$el.setAttribute('uid', uid);
            window.Vue.$store.commit('addItem', instance);
            return instance;
        }

        function pageParsing(node, parentUid) {
            let clone = node.cloneNode();
            let instance = createControl(clone);
            let parent = window.Vue.$store.state.items.find(x => x.uid === parentUid);
            parent.$el.appendChild(instance.$el);
            if (node.childElementCount === 0) {
                return;
            } else {
                for (let i = 0; i < node.childElementCount; i++) {
                    pageParsing(node.children[i], instance.uid);
                }
            }
        }
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
        let control = window.Vue.$store.state.items.find(item => item.uid === uid);
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
    * */
    selectControlEvent() {
        $('.main-designer-wrapper').mousedown(function (e) {
            GlobalService.selectControl(e.target);
            e.preventDefault();
        });
    },

    /*
    * 컨트롤 선택 이벤트 실행
    * @param eventTarget - 선택한 컨트롤
    * */
    selectControl(eventTarget) {
        let target;
        if (eventTarget.classList.contains('dews-mobile-component')) {
            target = eventTarget;
        } else {
            target = findTarget(eventTarget);
        }
        // 같은 컨트롤을 선택했을 경우 재 선택하는 것을 방지 / target이 null인 경우 return (dews-mobile-component가 아님)
        if ((window.selectedItem && window.selectedItem === target) || target === null) {
            return;
        }

        if (document.querySelector('.ui-selected') !== null) {
            const preSelected = document.querySelector('.ui-selected');
            preSelected.classList.remove('ui-selected');
            $(`[uid=${preSelected.getAttribute('uid')}]`).resizable({
                disabled: true
            })
            if (!preSelected.classList.contains('main-designer')) {
                let preList = preSelected.querySelectorAll(':scope > .ui-resizable-handle');
                preList.forEach(x => x.style.display = 'none');
            }
        }

        window.selectedItem = target;
        window.selectedItem.classList.add('ui-selected');
        // main-designer의 경우 resize 표시가 필요없으므로 canResize를 호출하지 않는다.
        if (!target.classList.contains('main-designer')) {
            ResizeService.removeResizeHandler();
            ResizeService.canResize(target);
        }
        ContextMenuService.destroyContextMenu();
        ContextMenuService.getContextMenu(window.selectedItem);
        mobileDesignerToIDE("select", window.selectedItem); // IDE로 선택되었다고 메세지 송신

        function findTarget(target) {
            return target.closest('.dews-mobile-component');
        }
    },
}
