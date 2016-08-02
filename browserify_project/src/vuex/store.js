import Vue from 'vue'
import Vuex from 'vuex'

import cart from './cart/store'
import timeline from './timeline/store'
import localStorage from './localstorage/store'

import createLogger from 'vuex/logger'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cart,
    timeline,
    localStorage
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})
