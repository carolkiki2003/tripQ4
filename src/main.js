import Vue from 'vue'
import Root from './pages/Roo/index.vue'
import store from './store/index'
import router from './router'
import '@/assets/style/main.scss'

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Root)
}).$mount('#app')
