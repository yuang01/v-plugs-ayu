import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: '',
      component: () =>
      import(/* webpackChunkName: "about" */ "./components/Layout/index.vue"),
      children: [
        {
          path: '/button',
          name: 'button',
          component: () => import( "../docs/button.md")
        },
        {
          path: '/floatinput',
          name: 'floatinput',
          component: () => import( "../docs/floatinput.md")
        },
        {
          path: '/pagination',
          name: 'pagination',
          component: () => import( "../docs/pagination.md")
        }
      ]
    },
  ]
});
