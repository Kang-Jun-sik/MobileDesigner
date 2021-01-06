import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import store from './store/index';
import vuetify from './plugins/vuetify';

import { BootstrapVue } from "bootstrap-vue";

import Wrapper from "@/components/Wrapper";
import RegisterService from "@/service/RegisterService";

Vue.config.productionTip = false

// Vue use
Vue.use(Vuex);
Vue.use(BootstrapVue)

Vue.component(Wrapper.name, Wrapper)
RegisterService.init();

//앱 진입
window.Vue = new Vue({
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')

