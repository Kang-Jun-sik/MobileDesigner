export default {
    state: {
        designerWrapperLayout: 'designer-wrapper-tabletL',
        designerLayout: 'designer-tabletL',
        mobileLayout: 'tabletL',

        mainButtonList: [],
        mainButtons: {
            'btn-save': false,
            'btn-add': false,
            'btn-delete': false,
            'btn-search': false,
        },
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
            return state.mainButtons;
        },
    },
    actions: {},
    mutations: {
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
        },
    }
}
