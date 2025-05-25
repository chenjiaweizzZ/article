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
  },
  {
    path: '/dialogDemo',
    name: 'dialogDemo',
    component: () => import('../views/dialogDemo.vue')
  },
  {
    path: '/inputTypeNumber',
    name: 'inputTypeNumber',
    component: () => import("../views/inputTypeNumber")
  },
  {
    path: '/mediumDemo',
    name: 'mediumDemo',
    component: () => import("../views/mediumDemo")
  },
  {
    path: '/audioDemoMul',
    name: 'audioDemoMul',
    component: () => import("../views/audioDemoMul")
  },
  {
    path: '/audioDemoGet',
    name: 'audioDemoGet',
    component: () => import("../views/audioDemoGet")
  },
  {
    path: '/audioDemoGet2',
    name: 'audioDemoGet2',
    component: () => import("../views/audioDemoGet2")
  },
  {
    path: '/skip1',
    name: 'skip1',
    component: () => import("@/views/skip1")
  },
  {
    path: '/expandAmation',
    name: 'expandAmation',
    component: () => import("@/views/expandAmation")
  },
  {
    path: '/ellipsisDemo',
    name: 'ellipsisDemo',
    component: () => import("@/views/ellipsisDemo")
  },
  {
    path: '/asyncDemo',
    name: 'asyncDemo',
    component: () => import("@/views/asyncDemo")
  },
  {
    path: '/docxView',
    name: 'docxView',
    component: () => import("@/views/docxView")
  },
  {
    path: '/preview',
    name: 'preview',
    component: () => import("@/views/preview")
  },
  {
    path: '/preview2',
    name: 'preview2',
    component: () => import("@/views/preview2")
  },
  {
    path: '/preview3',
    name: 'preview3',
    component: () => import("@/views/preview3")
  },
  {
    path: '/stricky',
    name: 'stricky',
    component: () => import("@/views/stricky")
  },
  {
    path: '/postMessageIndex',
    name: 'postMessageIndex',
    component: () => import("@/views/postMessageIndex")
  },
  {
    path: '/postMessageChild',
    name: 'postMessageChild',
    component: () => import("@/views/postMessageChild")
  },
  {
    path: '/tableMerge',
    name: 'tableMerge',
    component: () => import("@/views/tableMerge")
  },
  {
    path: '/inputFix',
    name: 'inputFix',
    component: () => import("@/views/inputFix")
  },
  {
    path: '/amapDemo',
    name: 'amapDemo',
    component: () => import("@/views/amapDemo")
  },
  {
    path: '/amapDemo2',
    name: 'amapDemo2',
    component: () => import("@/views/amapDemo2")
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
