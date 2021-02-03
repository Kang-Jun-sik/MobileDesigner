export default {
    state: {
        mainDesigner: '',
        navigationBar: '',
        datasourceArea: '',

        areaList: '',
        containerList: '',
        componentList: '',
        etcList: '',
    },
    getters: {},
    actions: {},
    mutations: {
        SET_DESIGNER(state, payload) {
            state.mainDesigner = payload;
        },
        SET_NAVIGATION_BAR(state, payload) {
            state.navigationBar = payload;
        },
        SET_CONTROL_LIST(state, payload) {
            let name = payload.name;
            state[name] = payload.control;
        },
    }
}
