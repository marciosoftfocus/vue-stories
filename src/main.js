import Vue from 'vue'
import App from './App.vue'
import store from './stores/store'
import './quasar'

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
