import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from "@/store/store";

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    beforeEnter: (to, from, next) => {
      if (!Store.getters.getUser.id) {
        console.log("Unauthorized");
        next("/loginpage");
      }
      next();
    }
  },
  
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },{
    path: '/loginpage',
    name: 'Loginpage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Loginpage.vue')
  },
  {
    path: '/owndevices',
    name: 'Owndevices',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Owndevices.vue'),
    beforeEnter: (to, from, next) => {
      if (!Store.getters.getUser.id) {
        console.log("Unauthorized");
        next("/loginpage");
      }
      next();
    }
  },
  {
    path: '/adddevice',
    name: 'Adddevice',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Adddevice.vue'),
    beforeEnter: (to, from, next) => {
      if (!Store.getters.getUser.id) {
        console.log("Unauthorized");
        next("/loginpage");
      }
      next();
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
