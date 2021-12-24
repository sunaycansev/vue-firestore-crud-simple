import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Add from "@/views/Add";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "Add",
    component: Add,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
