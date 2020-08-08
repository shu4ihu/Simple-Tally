import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index.js";
import store from "@/store/index.js";
import "@/assets/css/reset.css";
import "./plugins/element.js";
import './plugins/element.js'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
