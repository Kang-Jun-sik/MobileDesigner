import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

import { BootstrapVue } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Wrapper from "@/components/Wrapper";
import RegisterService from "@/service/RegisterService";
import { store } from './store';

Vue.config.productionTip = false

// Vue use
Vue.use(BootstrapVue)

//글로벌 컴포넌트 등록
Vue.component(Wrapper.name, Wrapper)

RegisterService.init();

//앱 진입
window.Vue = new Vue({
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')

