import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        items: [],
        //undoItems:[],
        //redoItems:[],

        mainDesigner: '',
        areaElement: '',
        containerElement: '',
        componentElement: '',
        etcElement: '',

        dragulaUid: {},

        designerWrapperLayout: 'designer-wrapper-tabletL',
        designerLayout: 'designer-tabletL',
        mobileLayout: 'tabletL',

        tabTitles: {},
        splitCount: 0,
    },
    mutations: {
        addItem(state, item) {
            state.items.push(item);
        },
        /*
        addUndoItem(state, item) {
            state.undoItems.push(item);
        },
        addRedoItem(state,item){
            state.redoItems.push(item);
        },
        */
        findDesigner(state, payload) {
            state.mainDesigner = payload;
        },
        findElement(state, payload) {
            let name = payload.name;
            state[name] = payload.control;
        },
        setLayout(state, payload) {
            state.designerWrapperLayout = 'designer-wrapper-' + payload;
            state.designerLayout = 'designer-' + payload;
            state.mobileLayout = payload;
        },
        matchDragulaUid(state, payload) {
            state.dragulaUid[payload.uid] = payload.muid;
        },
        addTabTitle(state, payload) {
            if (state.tabTitles[payload[0]]) {
                state.tabTitles[payload[0]].push(payload[1]);
            } else {
                state.tabTitles[payload[0]] = [payload[1]];
            }
        }
    },
    actions: {},
    getters: {
        items(state) {
            return state.items;
        },
        /*
        undoItems(state){
            return state.undoItems;
        },
        redoItems(state){
            return state.redoItems;
        },
        */
        wrapperSizeCheck(state) {
            return state.designerWrapperLayout;
        },
        designerSizeCheck(state) {
            return state.designerLayout;
        },
        mobileLayoutCheck(state) {
            return state.mobileLayout;
        },
        tabTitleList(state) {
            return state.tabTitles;
        }
    }
});
