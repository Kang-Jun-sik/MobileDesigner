import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        items: [],

        mainDesigner: '',
        containerElement: '',
        componentElement: '',
        etcElement: '',
        dragulaContainer: [],

        designerWrapperLayout: 'designer-wrapper-tabletL',
        designerLayout: 'designer-tabletL',
        mobileLayout: 'tabletL'
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
            state.designerWrapperLayout = payload.wrapper;
            state.designerLayout = payload.designer;
            state.mobileLayout = payload.layout;
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
        }
    }
});
