import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        items: [],

        mainDesigner: '',
        areaElement: '',
        containerElement: '',
        componentElement: '',
        etcElement: '',
        dragulaContainer: [],

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
        findDesigner(state, payload) {
            state.mainDesigner = payload;
        },
        findElement(state, payload) {
            let name = payload.name;
            state[name] = payload.control;
        },
        setDrake(state, element) {
            console.log(window.drake.container);
            console.log('state', state.dragulaContainer);
        },
        setLayout(state, payload) {
            state.designerWrapperLayout = 'designer-wrapper-' + payload;
            state.designerLayout = 'designer-' + payload;
            state.mobileLayout = payload;
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
