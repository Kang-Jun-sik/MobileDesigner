import store from "@/store/index";
import CreateService from "./CreateService";

export default {
    addTabsChild(element) {
        const $tabsContent = element.querySelector(`[data-type='tabs']`);
        const tab = CreateService.addComponent('AreaTab');
        $tabsContent.appendChild(tab.$el);
        store.commit('setTab', {
            tabsUid: element.getAttribute('uid'),
            tab: tab
        });
    },

    addButtonChild() {

    },

    addCheckboxChild() {

    },

    addRadioChild() {

    },
}
