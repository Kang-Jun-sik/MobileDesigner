export default {
    state: {
        workMode: '',

        designerWrapperLayout: 'designer-wrapper-tabletL',
        designerLayout: 'designer-tabletL',
        mobileLayout: 'tabletL',
    },
    getters: {
        getWorkMode(state) {
            return state.workMode;
        },

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
        setWorkMode(state, payload) {
            state.workMode = payload ? 'designer-style' : '';
        },

        setLayout(state, payload) {
            state.designerWrapperLayout = 'designer-wrapper-' + payload;
            state.designerLayout = 'designer-' + payload;
            state.mobileLayout = payload;
        },
    }
}
