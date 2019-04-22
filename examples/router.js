import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
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
        },
        {
          path: '/select',
          name: 'select',
          component: () => import( "../docs/select.md")
        },
        {
          path: '/carousel',
          name: 'select',
          component: () => import( "../docs/carousel.md")
        },
        {
          path: '/messageBox',
          name: 'messageBox',
          component: () => import( "../docs/messageBox.md")
        },
        {
          path: '/icon',
          name: 'icon',
          component: () => import( "../docs/icon.md")
        },
        {
          path: '/hoverTip',
          name: 'hoverTip',
          component: () => import( "../docs/hoverTip.md")
        },
        {
          path: '/input',
          name: 'input',
          component: () => import( "../docs/input.md")
        },
        {
          path: '/message',
          name: 'message',
          component: () => import( "../docs/message.md")
        }
      ]
    },
  ]
});
