import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import 'jquery-contextmenu';

import Vue from 'vue'
import {mobileDesignerToIDE} from "@/utils/mobileDesignerToIDE";
import ButtonComponent from "@/components/Controls/ButtonComponent";
import SearchContainer from "@/components/Containers/SearchContainer";
import GlobalService from "@/service/GlobalService";
import ContextMenuService from "@/service/ContextMenuService";


export default {
    /*
    * IDE <-> Designer 통신
    * */
    openService(args) {
        //(1) IDE로부터 받은 데이터 전처리
        //let tdata = `{ "commandType":"open","data":"<?xml version=\\"1.0\\" encoding=\\"utf-8\\"?><page title=\\"141414\\" name=\\"12341\\" type=\\"mpage\\"><canvas uid=\\"canvas-1485142915100\\" type=\\"mpage\\" title=\\"141414\\" component=\\"\\" function=\\"\\"><pageInformation><version>1.0</version><create>kjs1436</create><builddate d4p1:nil=\\"true\\" xmlns:d4p1=\\"http://www.w3.org/2001/XMLSchema-instance\\" /><createdate>2020-09-17T16:15:16.7463121+09:00</createdate><modifieddate d4p1:nil=\\"true\\" xmlns:d4p1=\\"http://www.w3.org/2001/XMLSchema-instance\\" /></pageInformation><mainButtons uid=\\"mainButtons-1385142915113\\"><mainButton uid=\\"mainButton-1485142971049\\" id=\\"information\\" buttonAttr=\\"disabled\\" type=\\"information\\" /><mainButton uid=\\"mainButton-1485142971050\\" id=\\"localize\\" buttonAttr=\\"disabled\\" type=\\"localize\\" /><mainButton uid=\\"mainButton-1485142971051\\" id=\\"approval\\" buttonAttr=\\"normal\\" type=\\"approval\\" /><mainButton uid=\\"mainButton-1485142971052\\" id=\\"add\\" buttonAttr=\\"normal\\" type=\\"add\\" /><mainButton uid=\\"mainButton-1485142971053\\" id=\\"search\\" buttonAttr=\\"normal\\" type=\\"search\\" /><mainButton uid=\\"mainButton-1485142971054\\" id=\\"delete\\" buttonAttr=\\"normal\\" type=\\"delete\\" /><mainButton uid=\\"mainButton-1485142971055\\" id=\\"print\\" buttonAttr=\\"normal\\" type=\\"print\\" /><mainButton uid=\\"mainButton-1485142971056\\" id=\\"save\\" buttonAttr=\\"normal\\" type=\\"save\\" /><mainButton uid=\\"mainButton-1485142971057\\" id=\\"configure\\" buttonAttr=\\"normal\\" type=\\"configure\\" /></mainButtons><mLayout uid=\\"mLayout-1485142971058\\" id=\\"mlayout\\"><mButton uid=\\"mButton-1485142971058\\" id=\\"mbutton\\" buttonType=\\"normal\\" disabled=\\"false\\" /></mLayout></canvas><dataSources /><pageCssStyle><![CDATA[]]></pageCssStyle><stylesheets /><javascripts /><settings /><datas /></page>","localization":"ko-KR"}`;
        let obj = JSON.parse(args);
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(obj.data, "application/xml");
        //let canvasDoc = xmlDoc.getElementsByTagName('canvas')[0];
        let canvasDoc = xmlDoc.getElementsByTagName('mobile-page')[0];
        let type = canvasDoc.attributes.getNamedItem('type').nodeValue;
        let mPage = window.Vue.$store.state.items.find(x => x.uid.startsWith("mobile-page"));

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
                    instance = GlobalService.addComponent('Search Container');
                    break;
                case 'mobile-button':
                    instance = GlobalService.addComponent('Button');
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

    /*
     * 컨트롤 UID 생성
     */
    createUid(target) {
        let controlUid;
        let date = new Date();
        return controlUid = target + '-' + date.getTime();
    },

    /*
     * 컨트롤 리사이즈
     */
    canResize(element) {
        const elementUid = element.getAttribute('uid');
        const target = $(`[uid=${elementUid}]`);
        $(target).resizable({
            disabled: false,
            handles: 'n, e, s, w, ne, se, sw, nw',
            delay: 0,

            minWidth: parseInt(target.css('minWidth'), 10),
            minHeight: parseInt(target.css('minHeight'), 10),
            maxWidth: parseInt(target.css('maxWidth'), 10),
            resize: function (e, ui) {
                e.stopPropagation();
                let dir = ui.element.data('ui-resizable').axis;
                if (!['s', 'e'].includes(dir)) {
                    // 수정 필요
                    ui.position.left = ui.originalPosition.left;
                    ui.position.top = ui.originalPosition.top;
                    ui.size.width = ui.originalSize.width;
                    ui.size.height = ui.originalSize.height;
                }
                let width = ui.size.width;
                let height = ui.size.height;
                set_position(width, height);
            },
            start: function (e, ui) {
                e.stopPropagation();
            },
            stop: function (e, ui) {
                e.stopPropagation();
            },
            create: function (e, ui) {
                let width = $(e.target).width();
                let height = $(e.target).height();
                set_position(width, height);
            },
        });
        set_position(element.offsetWidth, element.offsetHeight);

        function set_position(width, height) {
            $('.ui-resizable-n').css('left', (width / 2 - 4) + 'px');
            $('.ui-resizable-e').css('top', (height / 2 - 4) + 'px');
            $('.ui-resizable-s').css('left', (width / 2 - 4) + 'px');
            $('.ui-resizable-w').css('top', (height / 2 - 4) + 'px');
        }
    },

    /*
    * 컴포넌트 추가
    * */
    addComponent(type, param) {
        let component;
        switch (type) {
            case 'Button':
                component = Vue.extend(ButtonComponent);
                break;
            case 'Search Container':
                component = Vue.extend(SearchContainer);
                break;
        }
        component = new component();
        component.$mount();
        return component;
    },

    /*
    * 컨트롤 삭제
    * */
    deleteService(target) {
        if (target) {
            target.remove();
        }
    },

    /**
     * 컨트롤 선택(메인 디자이너 클릭시)
     */
    selectService() {
        $('.main-designer-wrapper').mousedown(function (event) {
            GlobalService.selectServiceParam(event);
        });
    },

    /**
     * 컨트롤 선택
     */
    selectServiceParam(event) {
        // 같은 컨트롤을 선택했을 경우 재 선택하는 것을 방지
        if (window.selectedItem && window.selectedItem === event.target) {
            return;
        }

        let target;
        if (event.target.classList.contains('dews-mobile-component')) {
            target = event.target;
        } else {
            target = findTarget(event.target);
        }
        // target이 null인 경우, dews-mobile-component 영역이 아니므로 return 한다.
        if (target === null) {
            return;
        }

        if (document.querySelector('.ui-selected') !== null) {
            const preSelected = document.querySelector('.ui-selected');
            //const resizeDir = ['.ui-resizable-n', '.ui-resizable-e', '.ui-resizable-s', '.ui-resizable-w', '.ui-resizable-ne', '.ui-resizable-se', '.ui-resizable-sw', '.ui-resizable-nw']
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
            GlobalService.canResize(target);
        }
        ContextMenuService.destroyContextMenu();
        ContextMenuService.getContextMenu(window.selectedItem);
        mobileDesignerToIDE("select", window.selectedItem); // IDE로 선택되었다고 메세지 송신
        event.preventDefault();

        function findTarget(target) {
            return target.closest('.dews-mobile-component');
        }
    },
    /*
     * 컨트롤 Split
     */
    splitService(target) {
        console.log('splitService', target.classList)
    },

    /*
     * 컨트롤 삭제 메세지 (Mobile Designer --> IDE)
     * */
    sendDeleteMessage(component) {
        // 부모 노드 찾기
        let parentNode = component.parentElement.closest('.dews-mobile-component');
        let parentUid = parentNode.getAttribute('uid');
        mobileDesignerToIDE("delete", component, parentUid);
    }
}
