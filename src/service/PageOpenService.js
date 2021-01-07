import Vue from "vue";
import store from "@/store/index";
import PageOpenService from "@/service/PageOpenService";

import {
    AreaPanel,
    AreaItem,
    AreaBox,
    AreaTabs,
    AreaTab,
    SearchContainer,
    ListContainer,
    FormContainer,
    InfoBoxContainer,
    Button,
    TextBox,
    CheckBox,
    RadioButton,
    NumericTextBox,
    MaskTextBox,
    DatePicker,
    MonthPicker,
    TimePicker,
    PeriodPicker,
    DropdownList,
    DropdownButton,
    ChildButton,
    Complex,
    ButtonGroup,
    RadioButtonGroup,
    CheckBoxGroup
} from '@/utils/exports'
import component from "@/store/modules/component";

export default {
    /*
    * 페이지 오픈 서비스 (EWP -> MOBILE DESIGNER PAGE Rendering)
    * @param args
    * */
    openService(args) {
        //(1) IDE로부터 받은 데이터 전처리
        //let tdata = `{ "commandType":"open","data":"<?xml version=\\"1.0\\" encoding=\\"utf-8\\"?><page title=\\"141414\\" name=\\"12341\\" type=\\"mpage\\"><canvas uid=\\"canvas-1485142915100\\" type=\\"mpage\\" title=\\"141414\\" component=\\"\\" function=\\"\\"><pageInformation><version>1.0</version><create>kjs1436</create><builddate d4p1:nil=\\"true\\" xmlns:d4p1=\\"http://www.w3.org/2001/XMLSchema-instance\\" /><createdate>2020-09-17T16:15:16.7463121+09:00</createdate><modifieddate d4p1:nil=\\"true\\" xmlns:d4p1=\\"http://www.w3.org/2001/XMLSchema-instance\\" /></pageInformation><mainButtons uid=\\"mainButtons-1385142915113\\"><mainButton uid=\\"mainButton-1485142971049\\" id=\\"information\\" buttonAttr=\\"disabled\\" type=\\"information\\" /><mainButton uid=\\"mainButton-1485142971050\\" id=\\"localize\\" buttonAttr=\\"disabled\\" type=\\"localize\\" /><mainButton uid=\\"mainButton-1485142971051\\" id=\\"approval\\" buttonAttr=\\"normal\\" type=\\"approval\\" /><mainButton uid=\\"mainButton-1485142971052\\" id=\\"add\\" buttonAttr=\\"normal\\" type=\\"add\\" /><mainButton uid=\\"mainButton-1485142971053\\" id=\\"search\\" buttonAttr=\\"normal\\" type=\\"search\\" /><mainButton uid=\\"mainButton-1485142971054\\" id=\\"delete\\" buttonAttr=\\"normal\\" type=\\"delete\\" /><mainButton uid=\\"mainButton-1485142971055\\" id=\\"print\\" buttonAttr=\\"normal\\" type=\\"print\\" /><mainButton uid=\\"mainButton-1485142971056\\" id=\\"save\\" buttonAttr=\\"normal\\" type=\\"save\\" /><mainButton uid=\\"mainButton-1485142971057\\" id=\\"configure\\" buttonAttr=\\"normal\\" type=\\"configure\\" /></mainButtons><mLayout uid=\\"mLayout-1485142971058\\" id=\\"mlayout\\"><mButton uid=\\"mButton-1485142971058\\" id=\\"mbutton\\" buttonType=\\"normal\\" disabled=\\"false\\" /></mLayout></canvas><dataSources /><pageCssStyle><![CDATA[]]></pageCssStyle><stylesheets /><javascripts /><settings /><datas /></page>","localization":"ko-KR"}`;
        const obj = JSON.parse(args);
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(obj.data, "application/xml");
        const canvasDoc = xmlDoc.getElementsByTagName('mobile-page')[0];
        const type = canvasDoc.attributes.getNamedItem('type').nodeValue;

        const mPage = store.state.component.items.find(item => item.uid.startsWith("main-designer"));
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
                    PageOpenService.pageParsing(canvasDoc.children[i], mPage.uid);
                    //pageParsing(canvasDoc.children[i], mPage.uid);
                }
            }
        }
    },

    /*
    * Recursive Function For Control Rendering
    * @param node
    * @param parentUid
    * */
    pageParsing(node, parentUid) {
        let instance = node.cloneNode();
        const parent = store.state.component.items.find(item => item.uid === parentUid);
        instance = PageOpenService.createControlFromData(instance);

        const parentMUid = parent.muid ? parent.muid : '';

        let addComponent;
        if (parent.isContainer) {
            addComponent = document.createElement('li');
            addComponent.appendChild(instance.$el);
        } else {
            addComponent = instance.$el;
        }

        if (parentMUid) {
            parent.$el.querySelector(`[muid=${parentMUid}]`).appendChild(addComponent);
        } else {
            parent.$el.appendChild(addComponent);
        }

        if (node.childElementCount === 0) return;
        for (let i = 0; i < node.childElementCount; i++) {
            PageOpenService.pageParsing(node.children[i], instance.uid);
        }
    },

    /*
    * Xml Data --> Create Control Logic
    * @param control
    * */
    createControlFromData(control) {
        const uid = control.getAttribute('uid');
        const type = control.tagName;

        let instance;
        switch (type) {
            case 'dews-area-panel':
                instance = Vue.extend(AreaPanel);
                break;
            case 'area-item':
                instance = Vue.extend(AreaItem);
                break;
            case 'dews-box':
                instance = Vue.extend(AreaBox);
                break;
            case 'dews-tabs':
                instance = Vue.extend(AreaTabs);
                break;
            case 'dews-tab':
                instance = Vue.extend(AreaTab);
                break;
            case 'dews-search-container':
                instance = Vue.extend(SearchContainer);
                break;
            case 'dews-list-container':
                instance = Vue.extend(ListContainer);
                break;
            case 'dews-form-container':
                instance = Vue.extend(FormContainer);
                break;
            case 'dews-info-container':
                instance = Vue.extend(InfoBoxContainer);
                break;
            case 'dews-button':
                instance = Vue.extend(Button);
                break;
            case 'dews-button-group':
                instance = Vue.extend(ButtonGroup);
                break;
            case 'dews-checkbox':
                instance = Vue.extend(CheckBox);
                break;
            case 'dews-checkbox-group':
                instance = Vue.extend(CheckBoxGroup);
                break;
            case 'dews-complex':
                instance = Vue.extend(Complex);
                break;
            case 'dews-datepicker':
                instance = Vue.extend(DatePicker);
                break;
            case 'dews-maskbox':
                instance = Vue.extend(MaskTextBox);
                break;
            case 'dews-monthpicker':
                instance = Vue.extend(MonthPicker);
                break;
            case 'dews-numerictextbox':
                instance = Vue.extend(NumericTextBox);
                break;
            case 'dews-periodpicker':
                instance = Vue.extend(PeriodPicker);
                break;
            case 'dews-radiobutton':
                instance = Vue.extend(RadioButton);
                break;
            case 'dews-radiobutton-group':
                instance = Vue.extend(RadioButtonGroup);
                break;
            case 'dews-textbox':
                instance = Vue.extend(TextBox);
                break;
            case 'dews-timepicker':
                instance = Vue.extend(TimePicker);
                break;
            case 'dews-dropdownlist':
                instance = Vue.extend(DropdownList);
                break;
            case 'dews-dropdownbutton':
                instance = Vue.extend(DropdownButton);
                break;
            case 'dropdownbutton-childbutton':
                instance = Vue.extend(ChildButton);
                break;
        }

        instance = new instance().$mount();
        instance.uid = uid;
        instance.$el.setAttribute('uid', uid);
        store.commit('addItem', instance);

        return instance;
    },
}
