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

const isPermitted = (name) => {
  const finded = store.state.userAccessTo.find(tab => tab === name);
  return (typeof finded !== "undefined");
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.login) {
      console.log("estas logueado");
      if(isPermitted(to.name)) {
        next();
      } else {
        store.commit("showAlertDialog", [`No tienes autorizacion para entrar a esta ruta`])
        next({ name: store.state.userAccessTo[0] })
      }
    } else {
      console.log("sesion cerrada");
      next({ name: "Login" });
    }
  } else {
    console.log("sin auntenticar");
    if (to.name === "Login" && store.state.login) {
      console.log("sesion abierta");
      next({ name: store.state.userAccessTo[0] });
      return;
    }
    console.log("No estas logueado");
    next();
  }
});

export default router
