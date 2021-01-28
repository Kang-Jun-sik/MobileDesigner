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
        setDesigner(state, payload) {
            state.mainDesigner = payload;
        },
        setControlList(state, payload) {
            let name = payload.name;
            state[name] = payload.control;
        },
    }
}
