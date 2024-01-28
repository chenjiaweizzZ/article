import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: () => import("../views/index.vue")
  },
  {
    path: '/index',
    name: 'index',
    component: () => import("../views/index.vue")
  },
  {
    path: '/print',
    name: 'print',
    component: () => import("../views/printDemo.vue")
  },
  {
    path: '/webpackChunkName',
    name: 'webpackChunkName',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/webpackChunkName.vue')
  },
  {
    path: '/dateDemo',
    name: 'dateDemo',
    component: () => import('../views/dateDemo.vue')
  },
  {
    path: '/vuexDemo',
    name: 'vuexDemo',
    component: () => import('../views/vuexDemo.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
