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

    addButtonChild() {

    },

    addCheckboxChild() {

    },

    addRadioChild() {

    },
}
