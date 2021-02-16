import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

// Vue.config.productionTip = false

Vue.use(VueResource);

new Vue({
  render: h => h(App),
}).$mount('#app')

