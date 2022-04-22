import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import vSelect from 'vue-select'



 // CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-select/dist/vue-select.css';


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('v-select', vSelect)

// Global API Key
Vue.prototype.$apiKey = "20571ab45c74dc2a1897b60c5b8047a1" 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
