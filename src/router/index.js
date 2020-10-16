import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'NewArrivals',
    component: () => import('../views/NewArrivals.vue')
  },
  {
    path: '/men',
    name: 'Men',
    component: () => import('../views/Men.vue')
  },
  {
    path: '/women',
    name: 'Women',
    component: () => import('../views/Women.vue')
  },
  {
    path: '/boys',
    name: 'Boys',
    component: () => import('../views/Boys.vue')
  },
  {
    path: '/girls',
    name: 'Girls',
    component: () => import('../views/Girls.vue')
  },
  {
    path: '/accessories',
    name: 'Accessories',
    component: () => import('../views/Accessories.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
