import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("@/views/home/Home.vue");
const Detail = () => import("@/views/detail/Detail.vue");
const Tag = () => import("@/views/tag/Tag.vue");
const Tally = () => import("@/views/tally/Tally.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/detail",
    component: Detail,
  },
  {
    path: "/tally",
    component: Tally,
  },
  {
    path: "/tag",
    component: Tag,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
