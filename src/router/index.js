import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("@/views/home/Home.vue");
const Detail = () => import("@/views/detail/Detail.vue");
const Tag = () => import("@/views/tag/Tag.vue");
const Tally = () => import("@/views/tally/Tally.vue");
const EditItem = () => import("@/views/detail/EditItem.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    name: "home",
    path: "/home",
    component: Home,
  },
  {
    name: "detail",
    path: "/detail",
    component: Detail,
  },
  {
    name: "tally",
    path: "/tally",
    component: Tally,
  },
  {
    name: "tag",
    path: "/tag",
    component: Tag,
  },
  {
    name: "editItem",
    path: "/editItem",
    component: EditItem,
  },
];

const router = new VueRouter({
  routes,
  // mode: "history",
});

export default router;
