import Vue from 'vue'
import App from './App.vue'
import './quasar'

Vue.config.productionTip = false

Vue.mixin({
    methods: {
            eventQueue(vlr) {
                App.methods.render(vlr)
            }
        }
    }
)

new Vue({
  render: h => h(App),
}).$mount('#app')
