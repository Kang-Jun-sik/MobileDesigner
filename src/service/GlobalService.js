import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import 'jquery-contextmenu';

import Vue from 'vue'
import {mobileDesignerToIDE} from "@/utils/mobileDesignerToIDE";
import GlobalService from "@/service/GlobalService";
import ContextMenuService from "@/service/ContextMenuService";

import Button from "@/components/Controls/ButtonComponent";
import SearchContainer from "@/components/Containers/SearchContainer";
import AreaPanel from "@/components/Area/AreaPanel";
import DewsBox from "@/components/Area/AreaBox";
import DewsTabs from "@/components/Area/tab/AreaTabs";


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
                    instance = GlobalService.addComponent('SearchContainer');
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

    /**
     * 디자이너 컨트롤 선택 서비스 (IDE --> MOBILE DESIGNER Control Selection)
     * @param args
     */
    selectFromIDEService(args) {
        //(1) uid를 추출한다.
        //(2) uid를 이용해 vuex에서 해당 componet의 $el을 가져온다.
        //(3) 해당 $el을 selectServiceParam함수의 파라미터로 넘겨준다.
        console.log(args);
        let message = JSON.parse(args);
        let uid = message['controlUniqueId'];
        let vcomponent = window.Vue.$store.state.items.find(x => x.uid == uid);
        GlobalService.selectServiceParam(vcomponent.$el);
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
     * 컨트롤 리사이즈 (jQuery 라이브러리 사용)
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


    setPosition(width, height) {
        $('.ui-resizable-n').css('left', (width / 2 - 4) + 'px');
        $('.ui-resizable-e').css('top', (height / 2 - 4) + 'px');
        $('.ui-resizable-s').css('left', (width / 2 - 4) + 'px');
        $('.ui-resizable-w').css('top', (height / 2 - 4) + 'px');
    },

    /*
    * 컴포넌트 추가 (vuex에서 관리될 수 있도록 Vue Component 객체 생성)
    **/
    addComponent(type, param) {
        let component;
        switch (removeSpaceBetweenWord(type)) {
            case 'Button':
                component = Vue.extend(Button);
                break;
            case 'SearchContainer':
                component = Vue.extend(SearchContainer);
                break;
            case 'AreaPanel':
                component = Vue.extend(AreaPanel);
                break;
            case 'DewsBox':
                component = Vue.extend(DewsBox);
                break;
            case 'DewsTabs':
                component = Vue.extend(DewsTabs);
        }
        component = new component();
        component.$mount();
        return component;

        function removeSpaceBetweenWord(word) {
            return word.split(' ').join('');
        }
    },

    /*
    * 컨트롤 삭제 (디자이너에서만 삭제)
    **/
    deleteService(target) {
        if (target) {
            target.remove();
        }
    },

    /*
     * 컨트롤 삭제 메세지 전달 함수 (Mobile Designer --> IDE)
     **/
    sendDeleteMessage(component) {
        // 부모 노드 찾기
        let parentNode = component.parentElement.closest('.dews-mobile-component');
        let parentUid = parentNode.getAttribute('uid');
        mobileDesignerToIDE("delete", component, parentUid);
    },

    /**
     * 컨트롤 선택(이벤트)
     * @param {event}
     */
    selectService() {
        $('.main-designer-wrapper').mousedown(function (event) {
            GlobalService.selectServiceParam(event.target);
            event.preventDefault();
        });
    },

    /**
     * 컨트롤 선택(파라미터)
     * @param {eventTarget}
     */
    selectServiceParam(eventTarget) {
        // 같은 컨트롤을 선택했을 경우 재 선택하는 것을 방지
        if (window.selectedItem && window.selectedItem === eventTarget) {
            return;
        }
        let target;
        if (eventTarget.classList.contains('dews-mobile-component')) {
            target = eventTarget;
        } else {
            target = findTarget(eventTarget);
        }
        // target이 null인 경우, dews-mobile-component 영역이 아니므로 return 한다.
        if (target === null) {
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
            GlobalService.canResize(target);
        }
        ContextMenuService.destroyContextMenu();
        ContextMenuService.getContextMenu(window.selectedItem);
        mobileDesignerToIDE("select", window.selectedItem); // IDE로 선택되었다고 메세지 송신
        //event.preventDefault();

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
    * 리사이즈 박스 없애는 함수(수정 필요)
    **/
    destoryResizable() {
        if (window.selectedItem) {
            GlobalService.setPosition(window.selectedItem.offsetWidth, window.selectedItem.offsetHeight);
        }
    },
}
