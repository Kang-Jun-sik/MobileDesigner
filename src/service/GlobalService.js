import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import Vue from 'vue'
import {mobileDesignerToIDE} from "@/utils/mobileDesignerToIDE";
import ButtonComponent from "@/components/Controls/ButtonComponent";
import SearchContainer from "@/components/Containers/SearchContainer";
import GlobalService from "@/service/GlobalService";


export default {
    openService(args) {
        //(1) IDE로부터 받은 데이터 전처리
        let tdata = `{ "commandType":"open","data":"<?xml version=\\"1.0\\" encoding=\\"utf-8\\"?><page title=\\"141414\\" name=\\"12341\\" type=\\"mpage\\"><canvas uid=\\"canvas-1485142915100\\" type=\\"mpage\\" title=\\"141414\\" component=\\"\\" function=\\"\\"><pageInformation><version>1.0</version><create>kjs1436</create><builddate d4p1:nil=\\"true\\" xmlns:d4p1=\\"http://www.w3.org/2001/XMLSchema-instance\\" /><createdate>2020-09-17T16:15:16.7463121+09:00</createdate><modifieddate d4p1:nil=\\"true\\" xmlns:d4p1=\\"http://www.w3.org/2001/XMLSchema-instance\\" /></pageInformation><mainButtons uid=\\"mainButtons-1385142915113\\"><mainButton uid=\\"mainButton-1485142971049\\" id=\\"information\\" buttonAttr=\\"disabled\\" type=\\"information\\" /><mainButton uid=\\"mainButton-1485142971050\\" id=\\"localize\\" buttonAttr=\\"disabled\\" type=\\"localize\\" /><mainButton uid=\\"mainButton-1485142971051\\" id=\\"approval\\" buttonAttr=\\"normal\\" type=\\"approval\\" /><mainButton uid=\\"mainButton-1485142971052\\" id=\\"add\\" buttonAttr=\\"normal\\" type=\\"add\\" /><mainButton uid=\\"mainButton-1485142971053\\" id=\\"search\\" buttonAttr=\\"normal\\" type=\\"search\\" /><mainButton uid=\\"mainButton-1485142971054\\" id=\\"delete\\" buttonAttr=\\"normal\\" type=\\"delete\\" /><mainButton uid=\\"mainButton-1485142971055\\" id=\\"print\\" buttonAttr=\\"normal\\" type=\\"print\\" /><mainButton uid=\\"mainButton-1485142971056\\" id=\\"save\\" buttonAttr=\\"normal\\" type=\\"save\\" /><mainButton uid=\\"mainButton-1485142971057\\" id=\\"configure\\" buttonAttr=\\"normal\\" type=\\"configure\\" /></mainButtons><mLayout uid=\\"mLayout-1485142971058\\" id=\\"mlayout\\"><mButton uid=\\"mButton-1485142971058\\" id=\\"mbutton\\" buttonType=\\"normal\\" disabled=\\"false\\" /></mLayout></canvas><dataSources /><pageCssStyle><![CDATA[]]></pageCssStyle><stylesheets /><javascripts /><settings /><datas /></page>","localization":"ko-KR"}`;
        let obj = JSON.parse(tdata);
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(obj.data, "application/xml");
        let canvasDoc = xmlDoc.getElementsByTagName('canvas')[0];
        let type = canvasDoc.attributes.getNamedItem('type').nodeValue;

        // eslint-disable-next-line no-empty
        if(type === 'mpage'){




        }
        //(2) 인스턴스 동적 생성후 디자이너 렌더링
        /*
        for (let i = 0; i < 3; i++) {
            const uid = GlobalService.uuidv4(); //리사이즈 핸들러 등록을 위한 UID 생성
            const designer = document.getElementById("main-designer");
            const instance = GlobalService.addComponent('Search Container');
            instance.classList.add(uid);
            designer.appendChild(instance);
            GlobalService.canResize(uid);
            //GlobalService.selectService(uid);
        }
        */

        console.log('open Service');
    },

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },
    canResize(element) {
        let uid;
        if (!element.id) {
            uid = element.parentNode.id;
        } else {
            uid = element.id;
        }

        let findUid = "#" + uid;
        $(findUid).resizable({
            disabled: false,
            handles: 'e,s',
            delay: 0,
            // eslint-disable-next-line no-unused-vars
            resize: function (e, ui) {
                e.stopPropagation();
            },
            // eslint-disable-next-line no-unused-vars
            start: function (e, ui) {
                e.stopPropagation();
            },
            // eslint-disable-next-line no-unused-vars
            stop: function (e, ui) {
                e.stopPropagation();
            }
        });
    },
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

    selectService() {
        $('#mainDesignerWrapper').click(function (event) {
            if (window.selectedItem) {
                if (window.selectedItem === event.target) //같은 컨트롤을 선택했을 경우 --> 바뀔 필요가 없다.
                    return;
            }
            let target;
            if (event.target.classList.contains('dews-mobile-component')){
                target = event.target;
            } else {
                target = findTarget(event.target);
            }

            if (document.querySelector('.ui-selected') !== null) {
                const preSelected = document.querySelector('.ui-selected');
                preSelected.classList.remove('ui-selected');
                $(`#${preSelected.id}`).resizable({
                    disabled: true
                })
                preSelected.querySelector('.ui-resizable-e').style.display = 'none';
                preSelected.querySelector('.ui-resizable-s').style.display = 'none';

            }
            window.selectedItem = target;
            window.selectedItem.classList.add('ui-selected');
            GlobalService.canResize(event.target);
            //IDE로 선택되었다고 메세지 송신
            //mobileDesignerToIDE("create", "button create test");
        });

        function findTarget(target) {
            return target.closest('.dews-mobile-component');
        }
    }
}
