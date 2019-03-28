import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";

Vue.config.productionTip = false;
Vue.use(Vuetify, {
  theme:{
    primary: "#4caf50",
    secondary: "#2196f3",
    accent: "#8bc34a",
    error: "#f44336",
    warning: "#ff9800",
    info: "#cddc39",
    success: "#03a9f4"
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
