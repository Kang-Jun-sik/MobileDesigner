export default {
    state: {
        designerWrapperLayout: 'designer-wrapper-tabletL',
        designerLayout: 'designer-tabletL',
        mobileLayout: 'tabletL',
        mainButtonList: [],
        mainButtons: {
            save: false,
            add: false,
            delete: false,
            search: false
        },
        tabTitleList: [],
    },
    getters: {
        wrapperSize(state) {
            return state.designerWrapperLayout;
        },
        designerSize(state) {
            return state.designerLayout;
        },
        mobileSize(state) {
            return state.mobileLayout;
        },
        getMainButtons(state){
            return state.mainButtons
        },
        getTabList(state){
            return state.tabTitleList
        }
    },
    actions: {},
    mutations: {
        setTab(state,payload){
            let array = state.tabTitleList[payload.uid];
            if(array !== undefined ){
              array.title.push(payload.title);
              array.active.push(payload.active)
            }else{
                array = {title: [payload.title],active: [payload.active]}
            }
            state.tabTitleList[payload.uid] = array;
        },
        setLayout(state, payload) {
            state.designerWrapperLayout = 'designer-wrapper-' + payload;
            state.designerLayout = 'designer-' + payload;
            state.mobileLayout = payload;
        },
        setMainButtonList(state, payload) {
            state.mainButtonList[payload.uid] = payload.mainButtons;
        },
        setMainButtons(state, payload) {
            state.mainButtons = payload;

        }
    }
}