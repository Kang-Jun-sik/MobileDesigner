import Vue from 'vue';
import Vuex from 'vuex';

import designer from "@/store/modules/designer";
import layout from "@/store/modules/layout";
import component from "@/store/modules/component";
import service from "@/store/modules/service";
import group from "@/store/modules/group";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        designer,
        layout,
        component,
        service,
        group
    }
});

export default store
