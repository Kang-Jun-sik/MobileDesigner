export default {
    state: {
        items: [],
        undoItems:[],
        redoItems:[],

        dragulaUid: {},

        dewsCardList: {}
    },
    getters: {

    },
    actions: {},
    mutations: {
        ADD_ITEM(state, item) {
            state.items.push(item);
        },
        MATCH_UID(state, payload) {
            state.dragulaUid[payload.uid] = payload.dataUid;
        },
        ADD_CARD_LIST(state, payload) {
            state.dewsCardList[payload.uid] = payload.cardListField;
        }
    }
}
