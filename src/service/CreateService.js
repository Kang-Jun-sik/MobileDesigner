import Vue from "vue";

import mobileDesignerToIDE from "@/utils/mobileDesignerToIDE";
import CreateService from "@/service/CreateService";
import PageOpenService from "@/service/PageOpenService";

import Button from "@/components/Controls/DewsButton";
import AreaPanel from "@/components/Area/AreaPanel";
import AreaItem from "@/components/Area/AreaItem";
import AreaBox from "@/components/Area/AreaBox";
import AreaTabs from "@/components/Area/tab/AreaTabs";
import SearchContainer from "@/components/Containers/SearchContainer";
import FormContainer from "@/components/Containers/FormContainer";
import InfoBoxContainer from "@/components/Containers/InfoBoxContainer";
import TextBox from "@/components/Controls/DewsTextBox";
import CheckBox from "@/components/Controls/DewsCheckBox";
import RadioButton from "@/components/Controls/DewsRadioButton";
import NumericTextBox from "@/components/Controls/DewsNumericTextBox";
import MaskTextBox from "@/components/Controls/DewsMaskTextBox";
import DatePicker from "@/components/Controls/DewsDatePicker";
import MonthPicker from "@/components/Controls/DewsMonthPicker";
import TimePicker from "@/components/Controls/DewsTimePicker";
import PeriodPicker from "@/components/Controls/DewsPeriodPicker";
import DropdownButton from "@/components/Controls/dropdownbutton/DewsDropdownbutton";
import DropdownList from "@/components/Controls/dropdownlist/DewsDropdownlist";
import Complex from "@/components/Controls/DewsComplex";
import ButtonGroup from "@/components/Controls/DewsButtonGroup";
import RadioButtonGroup from "@/components/Controls/DewsRadioButtonGroup";
import CheckBoxGroup from "@/components/Controls/DewsCheckBoxGroup";

export default {
    createFromIDE(args) {
        console.log('Create Control from IDE');
        const obj = JSON.parse(args);
        const parser = new DOMParser();
        const parentUid = obj['controlUniqueId'];
        let xmlDoc = parser.parseFromString(obj["controlAttributeValue"], "application/xml");

        PageOpenService.pageParsing(xmlDoc.firstElementChild, parentUid);
    },

    sendCreateMessage(component) {
        const parent = component.parentElement.closest('.dews-mobile-component')
        const parentUid = parent.getAttribute('uid');

        mobileDesignerToIDE("create", component, parentUid);
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
            case 'SearchContainer':
                component = Vue.extend(SearchContainer);
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
            case 'DropdownButton':
                component = Vue.extend(DropdownButton);
                break;
            case 'DropdownList':
                component = Vue.extend(DropdownList);
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
        }
        component = new component();
        component.$mount();
        return component;

        function removeSpaceBetweenWord(word) {
            return word.split(' ').join('');
        }
    },
}
