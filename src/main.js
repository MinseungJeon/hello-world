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

Vue.http.options.root = "https://vuejs-http-9afd6-default-rtdb.firebaseio.com/data.json";
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST'){
    request.method = 'PUT'
  }
  next(response => {
    response.json = () => { return {messages: response.body}}
  });
})

new Vue({
  render: h => h(App),
}).$mount('#app')

