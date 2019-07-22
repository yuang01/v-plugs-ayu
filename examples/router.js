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
      path: "",
      component: () => import("./components/Layout/index.vue"),
      children: [
        {
          path: "/install",
          name: "install",
          component: () => import("../docs/install.md")
        },
        {
          path: "/button",
          name: "button",
          component: () => import("../docs/button.md")
        },
        {
          path: "/floatinput",
          name: "floatinput",
          component: () => import("../docs/floatinput.md")
        },
        {
          path: "/pagination",
          name: "pagination",
          component: () => import("../docs/pagination.md")
        },
        {
          path: "/select",
          name: "select",
          component: () => import("../docs/select.md")
        },
        {
          path: "/carousel",
          name: "carousel",
          component: () => import("../docs/carousel.md")
        },
        {
          path: "/messageBox",
          name: "messageBox",
          component: () => import("../docs/messageBox.md")
        },
        {
          path: "/icon",
          name: "icon",
          component: () => import("../docs/icon.md")
        },
        {
          path: "/hoverTip",
          name: "hoverTip",
          component: () => import("../docs/hoverTip.md")
        },
        {
          path: "/input",
          name: "input",
          component: () => import("../docs/input.md")
        },
        {
          path: "/message",
          name: "message",
          component: () => import("../docs/message.md")
        },
        {
          path: "/notification",
          name: "notification",
          component: () => import("../docs/notification.md")
        },
        {
          path: "/layout",
          name: "layout",
          component: () => import("../docs/layout.md")
        },
        {
          path: "/radio",
          name: "radio",
          component: () => import("../docs/radio.md")
        },
        {
          path: "/checkbox",
          name: "checkbox",
          component: () => import("../docs/checkbox.md")
        },
        {
          path: "/circle",
          name: "circle",
          component: () => import("../docs/circle.md")
        },
        {
          path: "/inputNumber",
          name: "inputNumber",
          component: () => import("../docs/inputNumber.md")
        }
      ]
    }
  ]
});
