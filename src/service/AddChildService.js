import store from "@/store/index";
import CreateService from "./CreateService";

export default {
    addTabsChild(element) {
        const $tabsContent = element.querySelector(`[data-type='tabs']`);
        const tab = CreateService.addComponent('AreaTab');
        $tabsContent.appendChild(tab.$el);
        store.commit('SET_TAB', {
            tabsUid: element.getAttribute('uid'),
            tabData: {
                tab: tab
            }
        });
        CreateService.sendCreateMessage(tab.$el);
    },

    addDropdownChildButton(element){
        const uid = element.getAttribute('uid');
        const dropDownBtn = store.state.component.items.find(item => item.uid === uid);
        const $dropdownButtonList = element.querySelector('.dropdown-button-list');
        const dropdownChildButton = CreateService.addComponent('DropdownChildButton');
        $dropdownButtonList.appendChild(dropdownChildButton.$el);
        store.commit('ADD_ITEM', dropdownChildButton);
        CreateService.sendCreateMessage(dropdownChildButton.$el);
        dropDownBtn.setShowDropdownBtnList();
    },

    addButtonChild() {

    },

    addCheckboxChild() {

    },

    addRadioChild() {

    },
}
