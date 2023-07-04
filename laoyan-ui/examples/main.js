import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入index.js
//import helloWorld from '../packages/hello';
//Vue.use(helloWorld)

import helloWorld from '../lib/index.umd.js';
import '../lib/index.css'
Vue.use(helloWorld)

new Vue({
  render: h => h(App),
}).$mount('#app')
