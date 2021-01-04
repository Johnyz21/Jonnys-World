import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mean from '../views/statistics/Mean.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/journeys/statistics',
    name: 'Statistics',
    component: () => import('../views/journeys/Statistics.vue')
  },
  {
    path: '/journeys/data-science',
    name: 'Data Science',
    component: () => import('../views/journeys/DataScience.vue')
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
  },
  {
    path: '/data-science/linear-regression',
    name: 'Linear Regression',
    component: () => import('../views/dataScience/LinearRegression.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
