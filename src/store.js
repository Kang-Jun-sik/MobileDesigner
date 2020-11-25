import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        tabTitles: {},
        splitCount: 0,
    },
    mutations: {
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
        tabTitleList(state) {
            return state.tabTitles;
        }
    }
});

// export default store