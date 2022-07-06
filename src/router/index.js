import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/lesson-list",
  },
  {
    path: "/lesson-list",
    name: "lessonList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/lesson-list.vue"),
  },
  {
    path: "/lesson-new",
    name: "lessonNew",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/lesson-new.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
