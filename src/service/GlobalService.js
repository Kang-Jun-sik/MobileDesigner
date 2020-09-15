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

        //(2) 인스턴스 동적 생성후 디자이너 렌더링
        for (var i = 0; i < 3; i++) {
            const uid = GlobalService.uuidv4(); //리사이즈 핸들러 등록을 위한 UID 생성
            let designer = document.getElementById("main-designer");
            const instance = GlobalService.addComponent('Search Container');
            instance.classList.add(uid);
            designer.appendChild(instance);
            GlobalService.canResize(uid);
            //GlobalService.selectService(uid);
        }
        console.log('open Service');
    },

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },
    canResize(param) {
        let clsName = "." + param;
        $(clsName).resizable({
            handles: 'e,s',
            delay: 0,
            // eslint-disable-next-line no-unused-vars
            resize: function (e, ui) {
                console.log(e, ui)
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
        return component.$el;
    },
    /*
    selectService() {
        $(".main-designer-wrapper").selectable({
            filter: "div.dews-mobile-component",
            selected: function (e, ui) {
                console.log(e);
            },
            selecting: function (e, ui) {
                if ($(".ui-selected, .ui-selecting").length > 1) {
                    $(ui.selecting).removeClass("ui-selecting");
                }
            }
        });
    },
     */

    selectService() {
        let mainDesigner = document.querySelector('.main-designer-wrapper');
        mainDesigner.addEventListener('click', selectionService);

        function selectionService(event) {
            let target = findTarget(event.target);
            if (target == null)
                return;
            if (window.selectedItem) {
                if (window.selectedItem === target) //같은 컨트롤을 선택했을 경우 --> 바뀔 필요가 없다.
                    return;
            }
            if (document.querySelector('.ui-selected') !== null) {
                let preSelected = document.querySelector('.ui-selected');
                preSelected.classList.remove('ui-selected');
            }
            window.selectedItem = target;
            window.selectedItem.classList.add('ui-selected');
            //IDE로 선택되었다고 메세지 송신
            //mobileDesignerToIDE("create", "button create test");
        }

        function findTarget(target) {
            // eslint-disable-next-line no-constant-condition
            while (true) {
                if (target.classList.contains('dews-mobile-component')) {
                    return target;
                } else
                    target = target.parentNode;
            }
        }

        /*
        window.onclick = function (event) {
            let target = findtarget(event.target);
            if (target == null)
                return;
            if (window.selectedItem) {
                if (window.selectedItem === target) //같은 컨트롤을 선택했을 경우 --> 바뀔 필요가 없다.
                    return;
            }
            if (document.querySelector('.ui-selected') !== null) {
                let preSelected = document.querySelector('.ui-selected');
                preSelected.classList.remove('ui-selected');
            }
            window.selectedItem = target;
            window.selectedItem.classList.add('ui-selected');
            //IDE로 선택되었다고 메세지 송신
            //mobileDesignerToIDE("create", "button create test");
        }

        function findtarget(target) {
            // eslint-disable-next-line no-constant-condition
            while (true) {
                if (target === document.querySelector('.mobile-wrapper'))
                    return;
                if (target.classList.contains('dews-mobile-component')) {
                    return target;
                } else
                    target = target.parentNode;
            }
        }
     */
    }
}
