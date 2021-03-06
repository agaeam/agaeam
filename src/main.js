import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button,Switch} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Switch)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
