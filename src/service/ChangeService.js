import store from "@/store/index";
import ChangeService from "@/service/ChangeService";
import mobileDesignerToIDE from "@/utils/mobileDesignerToIDE";

export default {
    /*
    * 컨트롤 속성 변경 메세지 (Mobile Designer --> IDE)
    * */
    sendChangeMessage(...changeData) {
        const [attrKey, attrValue, controlUid] = changeData;

        mobileDesignerToIDE({
            commandType: 'change',
            AttributeKey: attrKey,
            AttributeValue: attrValue,
            uniqueId: controlUid,
        });
    },

    multiChangeMessage(changeData) {
        return {
            commandType : 'change',
            AttributeKey: changeData.AttributeKey,
            AttributeValue: changeData.AttributeValue,
            uniqueId: changeData.uniqueId,
        }
    },

    /*
    * IDE로부터 컨트롤 변경 메세지 처리
    * */
    changeFromIDE(message) {
        console.log('Change from IDE');
        const obj = JSON.parse(message);
        const uid = obj["controlUniqueId"];

        if (message === undefined || !uid) return;

        const prop = obj["controlAttributeKey"];
        const value = obj["controlAttributeValue"];
        const type = uid.substring(0, uid.lastIndexOf('-'));
        const data = { uid, prop, value }

        switch (type) {
            case 'dews-area-panel':
                ChangeService.changePanel(data);
                break;
            case 'area-item':
                ChangeService.changeItem(data);
                break;
            case 'dews-complex':
                ChangeService.changeComplex(data);
                break;
            case 'dews-box':
                ChangeService.changeBox(data);
                break;
            case 'dews-tabs':
                ChangeService.changeTabs(data);
                break;
            case 'dews-tab':
                ChangeService.changeTab(data);
                break;
            case 'dews-search-container':
                ChangeService.changeSearchContainer(data);
                break;
            case 'dews-custom-container' :
                ChangeService.changeCustomContainer(data);
                break;
            case 'dews-list-container':
                ChangeService.changeListContainer(data);
                break;
            case 'dews-form-container':
                ChangeService.changeFormContainer(data);
                break;
            case 'dews-info-container':
                ChangeService.changeInfoContainer(data);
                break;
            case 'form-section':
                ChangeService.changeFormSection(data);
                break;
            case 'container-content':
                ChangeService.changeContainerContent(data);
                break;
            case 'container-button':
                ChangeService.changeContainerButton(data);
                break;
            case 'dews-button':
                ChangeService.changeButton(data);
                break;
            case 'dews-button-group':
                ChangeService.changeButtonGroup(data);
                break;
            case 'dews-checkbox':
                ChangeService.changeCheckbox(data);
                break;
            case 'dews-checkbox-group':
                ChangeService.changeCheckboxGroup(data);
                break;
            case 'dews-datepicker':
                ChangeService.changeDatePicker(data);
                break;
            case 'dews-masktextbox':
                ChangeService.changeMaskTextbox(data);
                break;
            case 'dews-monthpicker':
                ChangeService.changeMonthPicker(data);
                break;
            case 'dews-numerictextbox':
                ChangeService.changeNumericTextbox(data);
                break;
            case 'numerictextbox-button':
                ChangeService.changeNumericTextboxButton(data);
                break;
            case 'dews-periodpicker':
                ChangeService.changePeriodPicker(data);
                break;
            case 'dews-codepicker':
                ChangeService.changeCodePicker(data);
                break;
            case 'dews-radiobutton':
                ChangeService.changeRadioButton(data);
                break;
            case 'dews-radiobutton-group':
                ChangeService.changeRadioButtonGroup(data);
                break;
            case 'dews-textbox':
                ChangeService.changeTextbox(data);
                break;
            case 'dews-timepicker':
                ChangeService.changeTimePicker(data);
                break;
            case 'dews-dropdownlist':
                ChangeService.changeDropdownList(data);
                break;
            case 'dews-dropdownbutton':
                ChangeService.changeDropdownButton(data);
                break;
            case 'dropdown-childbutton':
                ChangeService.changeDropdownChildButton(data);
                break;
            case 'dews-datasource':
                ChangeService.changeDatasource(data);
                break;
            case 'dews-cardlist':
                ChangeService.changeCardList(data);
                break;
            case 'dews-zipcodepicker':
                ChangeService.changeZipCodePicker(data);
        }
    },

    /*
    * 현재 선택된 컨트롤을 얻어와 변경 로직 수행
    * 1) Vuex에서 아이템 찾기(uid를 사용하여 찾음)
    * 2) Component의 method 호출
    * */

    changePanel(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
        }
    },

    changeItem(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'col':
                component.setCol(value);
                break;
        }
    },

    changeBox(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'title':
                component.setTitle(value);
                break;
            case 'collapsed':
                component.setCollapsed(value);
                break;
            case 'hide':
                component.setHide(value);
                break;
            case 'UseAdd':
                component.setBtnAdd(value);
                break;
            case 'UseSearch':
                component.setBtnSearch(value);
                break;
            case 'UseDelete':
                component.setBtnDelete(value);
                break;
            case 'UseSave':
                component.setBtnSave(value);
                break;
        }
    },

    changeTabs(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'selected':
                component.setSelected(value);
                break;
            case 'hide':
                component.setHide(value);
                break;
        }
    },

    changeTab(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'title':
                component.setTitle(value);
                break;
            case 'hide':
                component.setHide(value);
                break;
            case 'UseAdd':
                component.setBtnAdd(value);
                break;
            case 'UseSearch':
                component.setBtnSearch(value);
                break;
            case 'UseDelete':
                component.setBtnDelete(value);
                break;
            case 'UseSave':
                component.setBtnSave(value);
                break;
        }
    },

    changeCustomContainer(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            // case 'title':
            //     component.setTitle(value);
            //     break;
        }
    },


    changeSearchContainer(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'title':
                component.setTitle(value);
                break;
            case 'data-set':
                component.setConvenienceButton('data-set', value);
                break;
            case 'data-reset':
                component.setConvenienceButton('data-reset', value);
                break;
            case 'data-capture':
                component.setConvenienceButton('data-capture', value);
                break;
        }
    },

    changeListContainer(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'title':
                component.setTitle(value);
                break;
        }
    },

    changeFormContainer(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'title':
                component.setTitle(value);
                break;
            case 'data-set':
                component.setConvenienceButton('data-set', value);
                break;
            case 'data-reset':
                component.setConvenienceButton('data-reset', value);
                break;
            case 'data-capture':
                component.setConvenienceButton('data-capture', value);
                break;
        }
    },

    changeInfoContainer(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'type':
                component.setType(value);
                break;
        }
    },

    changeFormSection(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'title':
                component.setTitle(value);
                break;
        }
    },

    changeContainerContent(data) {
    },

    changeContainerButton(data) {
    },

    changeButton(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'text':
                component.setText(value);
                break;
            case 'ui':
                component.setUI(value);
                break;
            case 'size':
                component.setSize(value);
                break;
            case 'icon':
                component.setIcon(value);
                break;
            case 'link':
                component.setLink(value);
                break;
            case 'type':
                component.setType(value);
                break;
            case 'disabled':
                component.setDisabled(value);
                break;
            case 'group':
                component.setGroup(value);
                break;
        }
    },

    changeButtonGroup(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
        }
    },

    changeCheckbox(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'label':
                component.setLabel(value);
                break;
            case 'disabled':
                component.setDisabled(value);
                break;
            case 'checked':
                component.setChecked(value);
                break;
            case 'bookmark':
                component.setBookmark(value);
                break;
        }
    },

    changeCheckboxGroup(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'title':
                component.setTitle(value);
                break;
            case 'align':
                component.setAlign(value);
                break;
        }
    },

    changeComplex(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'title':
                component.setTitle(value);
                break;
        }
    },

    changeDatePicker(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'title':
                component.setTitle(value);
                break;
            case 'value':
                component.setValue(value);
                break;
            case 'min':
                component.setMin(value);
                break;
            case 'max':
                component.setMax(value);
                break;
            case 'disabled':
                component.setDisabled(value);
                break;
            case 'readonly':
                component.setReadonly(value);
                break;
            case 'required':
                component.setRequired(value);
                break;
            case 'spinner':
                component.setSpinner(value);
                break;
            case 'holidaysVisible':
                component.setHolidaysVisible(value);
                break;
            case 'holidaysDisabled':
                component.setHolidaysDisabled(value);
                break;
        }
    },

    changeMaskTextbox(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'title':
                component.setTitle(value);
                break;
            case 'value':
                component.setValue(value);
                break;
            case 'placeholder':
                component.setPlaceholder(value);
                break;
            case 'format':
                component.setFormat(value);
                break;
            case 'type':
                component.setType(value);
                break;
            case 'mask':
                component.setMask(value);
                break;
            case 'unmaskOnPost':
                component.setUnmaskOnPost(value);
                break;
            case 'disabled':
                component.setDisabled(value);
                break;
            case 'readonly':
                component.setReadonly(value);
                break;
            case 'required':
                component.setRequired(value);
                break;
        }
    },

    changeMonthPicker(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'title':
                component.setTitle(value);
                break;
            case 'value':
                component.setValue(value);
                break;
            case 'min':
                component.setMin(value);
                break;
            case 'max':
                component.setMax(value);
                break;
            case 'disabled':
                component.setDisabled(value);
                break;
            case 'readonly':
                component.setReadonly(value);
                break;
            case 'required':
                component.setRequired(value);
                break;
            case 'spinner':
                component.setSpinner(value);
                break;
        }
    },

    changeNumericTextbox(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'title':
                component.setTitle(value);
                break;
            case 'value':
                component.setValue(value);
                break;
            case 'placeholder':
                component.setPlaceholder(value);
                break;
            case 'prefix':
                component.setPrefix(value);
                break;
            case 'suffix':
                component.setSuffix(value);
                break;
            case 'format':
                component.setFormat(value);
                break;
            case 'decimals':
                component.setDecimals(value);
                break;
            case 'restrict':
                component.setRestrict(value);
                break;
            case 'maxLength':
                component.setMaxLength(value);
                break;
            case 'round':
                component.setRound(value);
                break;
            case 'disabled':
                component.setDisabled(value);
                break;
            case 'readonly':
                component.setReadonly(value);
                break;
            case 'required':
                component.setRequired(value);
                break;
            case 'numericButton':
                component.setNumericButton(value);
                break;
        }
    },

    changeNumericTextboxButton(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'max':
                component.setMax(value);
                break;
            case 'min':
                component.setMin(value);
                break;
            case 'step':
                component.setStep(value);
                break;
        }
    },

    changeCodePicker(data){
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);
        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'title':
                component.setTitle(value);
                break;
        }
    },

    changePeriodPicker(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'title':
                component.setTitle(value);
                break;
            case 'value':
                component.setValue(value);
                break;
            case 'min':
                component.setMin(value);
                break;
            case 'max':
                component.setMax(value);
                break;
            case 'disabled':
                component.setDisabled(value);
                break;
            case 'readonly':
                component.setReadonly(value);
                break;
            case 'required':
                component.setRequired(value);
                break;
            case 'holidaysVisible':
                component.setHolidaysVisible(value);
                break;
            case 'holidaysDisabled':
                component.setHolidaysDisabled(value);
                break;
            case 'start':
                component.setStart(value);
                break;
            case 'end':
                component.setEnd(value);
                break;
        }
    },

    changeRadioButton(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'label':
                component.setLabel(value);
                break;
            case 'disabled':
                component.setDisabled(value);
                break;
            case 'readonly':
                component.setReadonly(value);
                break;
            case 'checked':
                component.setChecked(value);
                break;
        }
    },

    changeRadioButtonGroup(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'title':
                component.setTitle(value);
                break;
            case 'align':
                component.setAlign(value);
                break;
            case 'disabled':
                component.setDisabled(value);
                break;
        }
    },

    changeTextbox(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'title':
                component.setTitle(value);
                break;
            case 'value':
                component.setValue(value);
                break;
            case 'type':
                component.setType(value);
                break;
            case 'placeholder':
                component.setPlaceholder(value);
                break;
            case 'multi':
                component.setMulti(value);
                break;
            case 'multiHeight':
                component.setMultiHeight(value);
                break;
            case 'required':
                component.setRequired(value);
                break;
            case 'disabled':
                component.setDisabled(value);
                break;
            case 'readonly':
                component.setReadonly(value);
                break;
        }
    },

    changeTimePicker(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'title':
                component.setTitle(value);
                break;
            case 'value':
                component.setValue(value);
                break;
            case 'min':
                component.setMin(value);
                break;
            case 'max':
                component.setMax(value);
                break;
            case 'disabled':
                component.setDisabled(value);
                break;
            case 'readonly':
                component.setReadonly(value);
                break;
            case 'required':
                component.setRequired(value);
                break;
            case 'spinner':
                component.setSpinner(value);
                break;
        }
    },

    changeDropdownList(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'title':
                component.setTitle(value);
                break;
            case 'multi':
                component.setMulti(value);
                break;
            case 'disabled':
                component.setDisabled(value);
                break;
            case 'readonly':
                component.setReadonly(value);
                break;
        }
    },

    changeDropdownButton(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'text':
                component.setText(value);
                break;
            case 'ui':
                component.setUI(value);
                break;
            case 'size':
                component.setSize(value);
                break;
            case 'group':
                component.setGroup(value);
                break;
            case 'disabled':
                component.setDisabled(value);
                break;
        }
    },

    changeDropdownChildButton(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'text':
                component.setText(value);
                break;
            case 'disabled':
                component.setDisabled(value);
                break;
        }
    },

    changeDatasource(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
        }
    },

    changeCardList(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        let cardListField;
        switch (prop) {
            case 'id':
                component.setID(value);
                break;

            case 'columns':
                cardListField = component.$refs.cardListField.lastElementChild;
                cardListField = store.state.component.items.find(item => item.uid === cardListField.getAttribute('uid'));
                store.commit('ADD_CARD_LIST', { uid, cardListField })
                cardListField.setField(value);
                break;
        }
    },

    changeZipCodePicker(data) {
        const { uid, prop, value } = data;
        const component = store.state.component.items.find(item => item.uid === uid);

        switch (prop) {
            case 'id':
                component.setID(value);
                break;
            case 'title':
                component.setTitle(value);
                break;
            case 'disabled':
                component.setDisabled(value);
                break;
            case 'readonly':
                component.setReadonly(value);
                break;
            case 'required':
                component.setRequired(value);
                break;
            case 'type':
                component.setType(value);
                break;
            case 'detailAddress':
                component.setDetailAddress(value);
                break;
            case 'zipCode':
                component.setZipCode(value);
                break;
            case 'address':
                component.setAddress(value);
                break;
            case 'detail':
                component.setDetail(value);
                break;
        }
    },

}
