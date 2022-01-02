import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueGtag from 'vue-gtag'

Vue.config.productionTip = false
Vue.use(VueGtag, {
  config: { id: 'UA-112821703-1' }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
