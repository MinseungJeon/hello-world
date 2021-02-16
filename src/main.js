import Vue from 'vue'
import App from './App.vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

// Vue.config.productionTip = false

Vue.directive('highlight', {
  bind(el, binding, vnode){
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;
    if (binding.arg == 'background'){
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')

