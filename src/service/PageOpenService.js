
import Vue from "vue";
import store from "@/store/index";
import PageOpenService from "@/service/PageOpenService";
import ChangeService from "@/service/ChangeService";
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
    ContainerContent,
    CardList,
    CardListField,
    Datasource
} from '@/utils/exports'

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

        if (type === 'mpage') {
            for (let canvasChild of canvasDoc.children) {
                if (canvasChild.tagName === "pageInformation") continue;

                if (canvasChild.tagName === "dews-datasource") {
                    PageOpenService.setDatasourceFromIDE(canvasChild);
                } else {
                    PageOpenService.pageParsing(canvasChild, mPage.uid);
                }
            }
        }
    },

    /*
    * Set Datasource from IDE
    * */
    setDatasourceFromIDE(dataSource) {
        const $dataSourceArea = document.querySelector('.datasource-area');
        const dataSourceControl = PageOpenService.createControlFromData(dataSource);
        $dataSourceArea.appendChild(dataSourceControl.$el);
    },

    /*
    * Set attribute from IDE
    * */
    setAttributeFromIDE(instance, control) {
        const attrs = instance.attributes;

        for (let attr of attrs) {
            if (!attr.name || attr.name === "uid") continue;

            const parseValue = attr.value === "true" || attr.value === "false";
            if (attr.name.includes('btn')) {
                control.mainButtons[attr.name] = JSON.parse(attr.value);
            } else {
                control[attr.name] = parseValue ? JSON.parse(attr.value) : attr.value;
            }
        }
    },

    /*
    * control parsing
    * container-button, container-content, form-section in form-container 제외
    **/
    controlParsing(instance, parent) {
        const control = PageOpenService.createControlFromData(instance);
        const controlUid = control.uid;
        const parentDataUid = parent.dataUid ? parent.dataUid : '';

        PageOpenService.setAttributeFromIDE(instance, control);

        let addComponent;
        switch (parent.controlType) {
            case 'tabs':
                addComponent = control.$el;
                store.commit('SET_TAB', {
                    tabsUid: parent.uid,
                    tabData: { tab: control }
                });
                store.commit('SET_NAVIGATION_BAR_TITLE_LIST', {
                    uid: control.uid,
                    title: control.title
                });
                store.commit('SET_MAIN_BUTTON_LIST',  {
                    uid: control.uid,
                    mainButtons: control.mainButtons
                });
                break;
            case 'search':
                addComponent = document.createElement('li');
                addComponent.appendChild(control.$el);
                break;
            case 'form':
                addComponent = document.createElement('li');
                addComponent.appendChild(control.$el);
                break;
            case 'group':
                addComponent = document.createElement('span');
                addComponent.className = 'group-item';
                addComponent.appendChild(control.$el);
                break;
            case 'button-group':
                control.group = true;
                addComponent = control.$el;
                ChangeService.sendChangeMessage('group', true, control.uid);
                break;
            default:
                addComponent = control.$el;
                break;
        }

        if (instance.tagName === "dews-box") {
            store.commit('SET_NAVIGATION_BAR_TITLE_LIST', {
                uid: control.uid,
                title: control.title
            });
            store.commit('SET_MAIN_BUTTON_LIST',  {
                uid: control.uid,
                mainButtons: control.mainButtons
            });
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
    **/
    pageParsing(node, parentUid) {
        let instance = node.cloneNode();
        let instanceUid;
        const parent = store.state.component.items.find(item => item.uid === parentUid);
        const oneChildList = ['container-button', 'container-summary', 'container-content', 'numerictextbox-button'];
        const multiChildList = ['dews-tab', 'form-section', 'dropdownbutton-childbutton'];

        function findChild(tagName, children) {
            return children.find(child => {
                return child.controlChild === tagName;
            });
        }

        let controlChild;
        if (oneChildList.includes(node.tagName)) {
            controlChild = findChild(node.tagName, parent.$children);
            controlChild.uid = node.getAttribute('uid');
            store.commit('ADD_ITEM', controlChild);
            instanceUid = controlChild.uid;
            PageOpenService.setAttributeFromIDE(instance, controlChild);
        } else if (multiChildList.includes(node.tagName)) {
            controlChild = findChild(node.tagName, parent.$children);
            if (parent.checkChild) {
                controlChild.uid = node.getAttribute('uid');
                instanceUid = controlChild.uid;

                if (node.tagName === 'dews-tab') {
                    store.commit('SET_TAB', {
                        tabsUid: parent.uid,
                        tabData: { tab: controlChild }
                    });
                    store.commit('SET_NAVIGATION_BAR_TITLE_LIST', {
                        uid: controlChild.uid,
                        title: controlChild.title
                    });
                    store.commit('SET_MAIN_BUTTON_LIST',  {
                        uid: controlChild.uid,
                        mainButtons: controlChild.mainButtons
                    });
                }
                parent.checkChild = false;
                store.commit('ADD_ITEM', controlChild);
                PageOpenService.setAttributeFromIDE(instance, controlChild);
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
    **/
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
            case 'dews-masktextbox':
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
            case 'dews-cardlist':
                instance = Vue.extend(CardList);
                break;
            case 'cardlist-field':
                instance = Vue.extend(CardListField);
                break;
            case 'dews-datasource':
                instance = Vue.extend(Datasource);
                break;
        }

        instance = new instance().$mount();
        instance.uid = uid;
        instance.$el.setAttribute('uid', uid);
        store.commit('ADD_ITEM', instance);

        return instance;
    },
}
