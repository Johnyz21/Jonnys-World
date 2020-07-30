import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/statistics/Home.vue'
import Mean from '../views/statistics/Mean.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/statistics/About.vue')
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: () => import('../views/statistics/Statistics.vue')
  },
  {
    path: '/statistics/deviations',
    name: 'Deviations',
    component: () => import('../views/statistics/Deviations.vue')
  },
  {
    path: '/statistics/mean',
    name: 'Mean',
    // component: () => import('../views/Mean.vue')
    component: Mean
  },
  {
    path: '/statistics/median',
    name: 'Median',
    component: () => import('../views/statistics/Median.vue')
  },
  {
    path: '/statistics/sampling',
    name: 'Sampling',
    component: () => import('../views/statistics/Sampling.vue')
  },
  {
    path: '/sound',
    name: 'Sound',
    component: () => import('../views/sound/SoundChannels.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
