import Vue from 'vue';
import Vuex from 'vuex';
import designer from "@/store/modules/designer";
import layout from "@/store/modules/layout";
import component from "@/store/modules/component";
import service from "@/store/modules/service";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        designer,
        layout,
        component,
        service
    }
});

export default store