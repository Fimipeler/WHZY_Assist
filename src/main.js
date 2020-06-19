import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import touch from "@/util/index.js";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import less from "less";

import axios from "axios";
// 引用loading组件
import loading from "@/views/common/loading/loading.js";

// 引入swiper
import VueAwesomeSwiper from "vue-awesome-swiper";

// import style
import "swiper/css/swiper.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 引入字体
import "./assets/font/index.css";

Vue.config.productionTip = false;
Vue.use(loading);
Vue.use(touch);
Vue.use(ViewUI);
Vue.use(ElementUI);
Vue.use(less);

Vue.use(VueAwesomeSwiper /* { default options with global component } */);
/* 配置请求http */
// axios.defaults.baseURL = "http://47.104.238.83";
axios.defaults.baseURL = globalConfig.baseURL;
// axios.interceptors.request.use(
//   function(config) {
//     // 这里的config包含每次请求的内容
//     let token = window.localStorage.getItem("token");
//     if (token) {
//       // 添加headers
//       config.headers["x-fydm"] = gloablConfig.fydm;
//       config.headers["x-token"] = `${token}`;
//       // config.headers["content-type"] =
//       //   "application/x-www-form-urlencoded;charset=UTF-8";
//     } else {
//     }
//     return config;
//   },
//   function(err) {
//     return Promise.reject(err);
//   }
// );
Vue.prototype.$axios = axios;

const vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// window.addEventListener('load', () => {
//   if (vue.$route.path !== ('/' +
//       store.state.homePage)) { // 首页
//     vue.$router.replace('/') // 切换到首页
//   }
// })
