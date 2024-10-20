import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/about-us",
      redirect: "/about",
    },
    {
      path: "/old-about",
      redirect: "/about",
    },
    {
      name: "users",
      path: "/users/",
      component: () => import("../views/UsersView.vue"),
    },
    {
      name: "user",
      path: "/users/:id",
      component: () => import("../views/UserView.vue"),

      //  beforeEnter(to, from, next){ // Option without usage of beforeEach
      // const logIn = confirm('Log in?')
      // !logIn ? next({name: 'home'}) : next()
      // }
    },
  ],
});

router.beforeEach((to, from, next) => {
  to.name === "user" && !confirm("Log in?") ? { name: "home" } : next();
});

router.afterEach((to, from) => {
  if (to.name === "user") {
    console.log("from", from);
    console.log("to", to);
  }
});

export default router;
