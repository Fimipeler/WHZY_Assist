import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      path: store.state.homePage
    }
  },
  {
    path: "/Index",
    num: "Index",
    component: () =>
      import(
        /* webpackChunknum: "Index" */
        "@/views/Index.vue"
      )
  },
  {
    path: "/cailiaoDetail/:name",
    num: "cailiaoDetail",
    component: () =>
      import(
        /* webpackChunknum: "cailiaoDetail" */
        "@/views/cailiaoDetail.vue"
      )
  },
  {
    path: "/cailiaoPhotoSlide/:num",
    num: "cailiaoPhotoSlide",
    component: () =>
      import(
        /* webpackChunknum: "cailiaoPhotoSlide" */
        "@/views/cailiaoPhotoSlide.vue"
      )
  },
  {
    path: "/bianPhotoSlide/:num",
    num: "bianPhotoSlide",
    component: () =>
      import(
        /* webpackChunknum: "bianPhotoSlide" */
        "@/views/bianPhotoSlide.vue"
      )
  },
  {
    path: "/sifaPhotoSlide/:num",
    num: "sifaPhotoSlide",
    component: () =>
      import(
        /* webpackChunknum: "sifaPhotoSlide" */
        "@/views/sifaPhotoSlide.vue"
      )
  },
  {
    path: "/shouyePhotoSlide/:num",
    num: "shouyePhotoSlide",
    component: () =>
      import(
        /* webpackChunknum: "shouyePhotoSlide" */
        "@/views/shouyePhotoSlide.vue"
      )
  },
  {
    path: "/shehuiPhotoSlide/:num",
    num: "shehuiPhotoSlide",
    component: () =>
      import(
        /* webpackChunknum: "shehuiPhotoSlide" */
        "@/views/shehuiPhotoSlide.vue"
      )
  },
  {
    path: "/dangshirenPhotoSlide/:num",
    num: "dangshirenPhotoSlide",
    component: () =>
      import(
        /* webpackChunknum: "dangshirenPhotoSlide" */
        "@/views/dangshirenPhotoSlide.vue"
      )
  },
  {
    path: "/lvshiPhotoSlide/:num",
    num: "lvshiPhotoSlide",
    component: () =>
      import(
        /* webpackChunknum: "lvshiPhotoSlide" */
        "@/views/lvshiPhotoSlide.vue"
      )
  },
  {
    path: "/test",
    num: "test",
    component: () =>
      import(
        /* webpackChunknum: "test" */
        "@/views/test.vue"
      )
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach((to, from, next) => {
//   if (to.path === "/"+store.state.homePage) {
//     next();
//   } else {
//     next("/" + store.state.homePage);
//   }
// });

export default router;
