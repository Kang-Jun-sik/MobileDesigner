export default {
    state: {
        tabList: {},
    },
    getters: {
        getTabList(state) {
            return state.tabList;
        },
    },
    actions: {},
    mutations: {
        SET_TAB(state, payload) {
            if (state.tabList[payload.tabsUid]) {
                state.tabList[payload.tabsUid].push(payload.tabData);
            } else {
                state.tabList[payload.tabsUid] = [payload.tabData];
            }
        },
    }
}
