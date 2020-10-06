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
    },
    mutations: {
        addItem(state, item) {
            state.items.push(item);
        },
        findDesigner(state, payload) {
            state.mainDesigner = payload;
        },
        setDrake(state, element) {
            console.log(window.drake.container)
            console.log('state', state.dragulaContainer)
        }
    },
    actions: {},
    getters: {
        items: state => {
            return state.items;
        }
    }
});
