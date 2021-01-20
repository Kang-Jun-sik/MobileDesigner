export default {
    state: {
        tabList: new Map(),
    },
    getters:
        {getTabList(state){
            return state.tabList
        },
    },
    actions: {},
    mutations: {
        setTab(state, payload) {
            let tab = [];
            tab = state.tabList.get(payload.tabsUid);
            (tab === undefined) ? tab = []:null;
            tab[payload.tabUid] = {active: payload.active, title: payload.title};
            state.tabList.set(payload.tabsUid,tab);
            console.log(state.tabList);
        },
    }
}
