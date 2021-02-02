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
            'btn-search': false
        },
    },
    getters: {
        getWrapperSize(state) {
            return state.designerWrapperLayout;
        },
        getDesignerSize(state) {
            return state.designerLayout;
        },
        getMobileSize(state) {
            return state.mobileLayout;
        },

        getMainButtons(state){
            return state.mainButtons;
        },
    },
    actions: {},
    mutations: {
        SET_LAYOUT(state, payload) {
            state.designerWrapperLayout = 'designer-wrapper-' + payload;
            state.designerLayout = 'designer-' + payload;
            state.mobileLayout = payload;
        },

        SET_MAIN_BUTTON_LIST(state, payload) {
            state.mainButtonList[payload.uid] = payload.mainButtons;
        },
        SET_MAIN_BUTTONS(state, payload) {
            state.mainButtons = payload;
        },
    }
}
