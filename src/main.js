import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import GlobalComponent from './components/global-component'
import Wrapper from './components/wrapper'

Vue.config.productionTip = false

//글로벌 컴포넌트 등록
Vue.component(GlobalComponent.name, GlobalComponent)
Vue.component(Wrapper.name, Wrapper)

Vue.use(BootstrapVue)

//앱 진입
new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')

