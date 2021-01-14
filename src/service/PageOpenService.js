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
    CheckBoxGroup,
    FormSection,
    ContainerButton,
    ContainerContent
} from '@/utils/exports'
import component from "@/store/modules/component";

export default {
    /*
    * 페이지 오픈 서비스 (EWP -> MOBILE DESIGNER PAGE Rendering)
    * @param args
    * */
    openService(args) {
        // 1) IDE로부터 받은 데이터 전처리
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
    * control parsing
    * container-button, container-content, form-section in form-container 제외
    * */
    controlParsing(instance, parent) {
        const control = PageOpenService.createControlFromData(instance);
        const controlUid = control.uid;
        const parentDataUid = parent.dataUid ? parent.dataUid : '';

        let addComponent;
        if (parent.containerType === 'search' || parent.containerType === 'form') {
            addComponent = document.createElement('li');
            addComponent.appendChild(control.$el);
        } else {
            addComponent = control.$el;
        }

        if (parentDataUid) {
            parent.$el.querySelector(`[data-uid=${parentDataUid}]`).appendChild(addComponent);
        } else {
            parent.$el.appendChild(addComponent);
        }

        return controlUid;
    },

    /*
    * Recursive Function For Control Rendering
    * @param node
    * @param parentUid
    * */
    pageParsing(node, parentUid) {
        let instance = node.cloneNode();
        let instanceUid;
        const parent = store.state.component.items.find(item => item.uid === parentUid);

        const controlChildList = ['container-button', 'container-content', 'form-section',
            'numerictextbox-button', 'dropdownbutton-childbutton', 'dews-button'];
        if (controlChildList.includes(node.tagName)) {
            const controlChild = parent.$children.find(child => {
                return child.controlChild === node.tagName;
            });

            if (controlChild) {
                controlChild.uid = node.getAttribute('uid');
                instanceUid = controlChild.uid;
                store.commit('addItem', controlChild);
            } else {
                instanceUid = PageOpenService.controlParsing(instance, parent);
            }
        } else {
            instanceUid = PageOpenService.controlParsing(instance, parent);
        }

        if (node.childElementCount === 0) return;
        for (let child of node.children) {
            PageOpenService.pageParsing(child, instanceUid);
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
            case 'form-section':
                instance = Vue.extend(FormSection);
                break;
            case 'container-content':
                instance = Vue.extend(ContainerContent);
                break;
            case 'container-button':
                instance = Vue.extend(ContainerButton);
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
