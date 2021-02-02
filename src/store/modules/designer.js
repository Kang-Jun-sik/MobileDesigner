export default {
    state: {
        mainDesigner: '',
        areaList: '',
        containerList: '',
        componentList: '',
        etcList: '',
        datasourceArea: '',
    },
    getters: {},
    actions: {},
    mutations: {
        SET_DESIGNER(state, payload) {
            state.mainDesigner = payload;
        },
        SET_CONTROL_LIST(state, payload) {
            let name = payload.name;
            state[name] = payload.control;
        },
    }
}
