import Vue from 'vue';
import Vuex from 'vuex';
import designer from "@/store/modules/designer";
import layout from "@/store/modules/layout";
import item from "@/store/modules/item";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        designer,
        layout,
        item,
    }
});

export default store