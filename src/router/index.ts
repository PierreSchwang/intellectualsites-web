import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SponsorsView from "../views/SponsorsView.vue";
import ContactView from "../views/ContactView.vue";
import FastAsyncWorldEditView from "../views/projects/FastAsyncWorldEditView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sponsors",
      name: "sponsors",
      component: SponsorsView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/fawe",
      name: "fawe",
      component: FastAsyncWorldEditView,
    },
  ],
});

export default router;
