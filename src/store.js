import Vue from 'vue';
import Vuex from 'vuex';
import dragula from 'dragula';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        mainDesigner: '',
        containerElement: '',
        componentElement: '',
        etcElement: ''
    },
    mutations: {
        findDesigner(state, payload) {
            state.mainDesigner = payload;
        },
        findElement(state, payload) {
            let name = payload.name;
            state[name] = payload.control;
        }
    },
    actions: {

    },
    getters: {

    }
});
