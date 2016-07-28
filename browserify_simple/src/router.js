import CartPage from './pages/CartPage.vue'
import TimelinePage from './pages/TimelinePage.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
var router = new VueRouter({
  history: false
})

router.map({
  '/': {
    component: TimelinePage
  },
  '/cart': {
    component: CartPage
  },
  '/timeline': {
    component: TimelinePage
  },
  '/timeline/:id': {
    component: TimelinePage
  }
})

export default router
