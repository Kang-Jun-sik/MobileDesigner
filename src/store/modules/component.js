export default {
    state: {
        items: [],
        undoItems:[],
        redoItems:[],

        dragulaUid: {},

        dewsCardList: {}
    },
    getters: {
        getItems(state) {
            return state.items;
        },
        getUndoItems(state){
            return state.undoItems;
        },
        getRedoItems(state){
            return state.redoItems;
        },
    },
    actions: {},
    mutations: {
        ADD_ITEM(state, item) {
            state.items.push(item);
        },
        ADD_UNDO_ITEM(state, item) {
            state.undoItems.push(item);
        },
        ADD_REDO_ITEM(state,item){
            state.redoItems.push(item);
        },
        MATCH_UID(state, payload) {
            state.dragulaUid[payload.uid] = payload.dataUid;
        },
        ADD_CARD_LIST(state, payload) {
            state.dewsCardList[payload.uid] = payload.cardListField;
        }
    }
}
