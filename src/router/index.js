import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mean from '../views/Mean.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: () => import('../views/Statistics.vue')
  },
  {
    path: '/statistics/deviations',
    name: 'Deviations',
    component: () => import('../views/Deviations.vue')
  },
  {
    path: '/statistics/mean',
    name: 'Mean',
    // component: () => import('../views/Mean.vue')
    component: Mean
  },
  {
    path: '/statistics/sampling',
    name: 'Sampling',
    component: () => import('../views/Sampling.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
