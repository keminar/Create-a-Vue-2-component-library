import Vue from 'vue'
import App from './App.vue'
import store from './store';
Vue.config.productionTip = false
//import DummyButton from 'dummylib';
import DummyButton from '../../dummylib/dist/dummylib.umd'
Vue.use(DummyButton, { store });
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
