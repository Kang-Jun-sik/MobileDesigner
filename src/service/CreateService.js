import Vue from "vue";
import store from "@/store/index";
import mobileDesignerToIDE from "@/utils/mobileDesignerToIDE";
import CreateService from "@/service/CreateService";
import PageOpenService from "@/service/PageOpenService";

import {
    AreaBox,
    AreaItem,
    AreaPanel,
    AreaTab,
    AreaTabs,
    Button,
    ButtonGroup,
    CardList,
    CardListField,
    CheckBox,
    CheckBoxGroup,
    ChildButton,
    Complex,
    Datasource,
    DatePicker,
    DropdownButton,
    DropdownList,
    FormContainer,
    InfoBoxContainer,
    ListContainer,
    MaskTextBox,
    MonthPicker,
    NumericTextBox,
    PeriodPicker,
    RadioButton,
    RadioButtonGroup,
    SearchContainer,
    TextBox,
    TimePicker
} from '@/utils/exports'
import makeForIDEInfo from "@/utils/makeForIDEInfo";

export default {
    createFromIDE(args) {
        console.log('Create Control from IDE');
        const obj = JSON.parse(args);
        const parser = new DOMParser();
        const parentUid = obj['controlUniqueId'];
        const xmlDoc = parser.parseFromString(obj["data"], "application/xml");

        if (obj.index) {
            xmlDoc.firstElementChild.setAttribute('index', obj.index);
        }

        PageOpenService.pageParsing(xmlDoc.firstElementChild, parentUid);
    },

    /*
    * 컨트롤 생성 메세지 전달 함수 (Mobile Designer --> IDE)
    * */
    sendCreateMessage(control) {
        const sendCreate = {commandType: 'create'};
        const makeMessage = makeForIDEInfo.makeCreateMessage(control);

        mobileDesignerToIDE({
            ...sendCreate,
            ...makeMessage
        });
    },

    /*
    * MultiCommand를 위한 생성 메세지 전달 함수
    * */
    multiCreateMessage(control) {
        const sendCreate = {commandType: 'create'};
        const makeMessage = makeForIDEInfo.makeCreateMessage(control);

        return {...sendCreate, ...makeMessage};
    },

    /*
    * 컨트롤 재정렬을 위한 컨트롤 생성 로직
    * @param target
    * */
    reArrangeCreate(target) {
        Array.from(target.children).forEach(child => {
            if (child.getAttribute('uid')) {
                CreateService.sendCreateMessage(child);
            }
            CreateService.reArrangeCreate(child);
        });
    },

    /*
    * 컨트롤 UID 생성
    * */
    createUid(target) {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return target + '-' + s4() + s4();
    },

    /*
    * 컴포넌트 추가 (Vuex에서 관리될 수 있도록 Vue Component 객체 생성)
    * */
    addComponent(type, param) {
        let component;
        switch (removeSpaceBetweenWord(type)) {
            case 'AreaPanel':
                component = Vue.extend(AreaPanel);
                break;
            case 'AreaItem':
                component = Vue.extend(AreaItem);
                break;
            case 'AreaBox':
                component = Vue.extend(AreaBox);
                break;
            case 'AreaTabs':
                component = Vue.extend(AreaTabs);
                break;
            case 'AreaTab':
                component = Vue.extend(AreaTab);
                break;
            case 'SearchContainer':
                component = Vue.extend(SearchContainer);
                break;
            case 'ListContainer':
                component = Vue.extend(ListContainer);
                break;
            case 'FormContainer':
                component = Vue.extend(FormContainer);
                break;
            case 'InfoBoxContainer':
                component = Vue.extend(InfoBoxContainer);
                break;
            case 'Button':
                component = Vue.extend(Button);
                break;
            case 'TextBox':
                component = Vue.extend(TextBox);
                break;
            case 'CheckBox':
                component = Vue.extend(CheckBox);
                break;
            case 'RadioButton':
                component = Vue.extend(RadioButton);
                break;
            case 'NumericTextBox':
                component = Vue.extend(NumericTextBox);
                break;
            case 'MaskTextBox':
                component = Vue.extend(MaskTextBox);
                break;
            case 'DatePicker':
                component = Vue.extend(DatePicker);
                break;
            case 'MonthPicker':
                component = Vue.extend(MonthPicker);
                break;
            case 'TimePicker':
                component = Vue.extend(TimePicker);
                break;
            case 'PeriodPicker':
                component = Vue.extend(PeriodPicker);
                break;
            case 'DropdownList':
                component = Vue.extend(DropdownList);
                break;
            case 'DropdownButton':
                component = Vue.extend(DropdownButton);
                break;
            case 'DropdownChildButton':
                component = Vue.extend(ChildButton);
                break;
            case 'ComplexControl':
                component = Vue.extend(Complex);
                break;
            case 'ButtonGroup':
                component = Vue.extend(ButtonGroup);
                break;
            case 'RadioGroup':
                component = Vue.extend(RadioButtonGroup);
                break;
            case 'CheckBoxGroup':
                component = Vue.extend(CheckBoxGroup);
                break;
            case 'CardList':
                component = Vue.extend(CardList);
                break;
            case 'Card':
                component = Vue.extend(CardListField);
                break;
            case 'Datasource':
                component = Vue.extend(Datasource);
                break;
        }
        component = new component();
        component.$mount();
        return component;

        function removeSpaceBetweenWord(word) {
            return word.split(' ').join('');
        }
    },
}
