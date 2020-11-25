export default {
    state: {
        designerWrapperLayout: 'designer-wrapper-tabletL',
        designerLayout: 'designer-tabletL',
        mobileLayout: 'tabletL',
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
    },
    actions: {},
    mutations: {
        setLayout(state, payload) {
            state.designerWrapperLayout = 'designer-wrapper-' + payload;
            state.designerLayout = 'designer-' + payload;
            state.mobileLayout = payload;
        },
    }
}