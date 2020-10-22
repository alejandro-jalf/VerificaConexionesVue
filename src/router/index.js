import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue';
import Login from "../views/Login.vue";
import About from "../views/About.vue";
import Conexiones from "../views/ViewConexion.vue";

import store from '../store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: '/conexiones',
    name: "Conexiones",
    component: Conexiones,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.login) {
      console.log("login", store.state.login);
      next();
    } else {
      console.log("deneit");
      next({ name: "Login" });
    }
  } else {
    console.log("default");
    next();
  }
});

export default router
