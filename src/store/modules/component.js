export default {
    state: {
        items: [],
        undoItems:[],
        redoItems:[],

        dragulaUid: {},
    },
    getters: {
        items(state) {
            return state.items;
        },
        undoItems(state){
            return state.undoItems;
        },
        redoItems(state){
            return state.redoItems;
        },
    },
    actions: {},
    mutations: {
        addItem(state, item) {
            state.items.push(item);
        },
        addUndoItem(state, item) {
            state.undoItems.push(item);
        },
        addRedoItem(state,item){
            state.redoItems.push(item);
        },
        matchUid(state, payload) {
            state.dragulaUid[payload.uid] = payload.dataUid;
        },
    }
}
