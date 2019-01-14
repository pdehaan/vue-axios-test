import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";

import App from "./App.vue";
 
Vue.use(VueAxios, axios);

Vue.config.productionTip = true;

new Vue({
  render: h => h(App),
}).$mount("#app");
