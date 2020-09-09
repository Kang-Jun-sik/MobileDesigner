import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

import { BootstrapVue } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import GlobalComponent from './components/global-component'
import Wrapper from "@/components/Wrapper";
import registerService from "@/service/registerService";
import { store } from './store';
import GlobalService from "@/service/GlobalService";

Vue.config.productionTip = false

// Vue use
Vue.use(BootstrapVue)

//글로벌 컴포넌트 등록
Vue.component(GlobalComponent.name, GlobalComponent)
Vue.component(Wrapper.name, Wrapper)

registerService.init();

//앱 진입
new Vue({
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')
