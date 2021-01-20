export default {
    state: {
        tabTitleList: [],
    },
    getters: {
        getTabList(state){
            return state.tabTitleList
        },
    },
    actions: {},
    mutations: {
        setTab(state, payload) {
            let titles = state.tabTitleList[payload.uid];
            if (titles) {
                titles.title.push(payload.title);
                titles.active.push(payload.active)
            } else {
                titles = {
                    title: [payload.title],
                    active: [payload.active]
                }
            }
            state.tabTitleList[payload.uid] = titles;
        },
    }
}
