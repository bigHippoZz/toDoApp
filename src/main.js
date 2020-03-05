import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;
// 全局组件
import Global from './global'
Vue.use(Global)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");