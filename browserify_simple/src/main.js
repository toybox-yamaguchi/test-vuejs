import App from './pages/App.vue'
import router from './router'
import store from './vuex/store' // vuex store instance

// プラグイン追加
import Vue from 'vue'
import VueAnimatedList from 'vue-animated-list'
Vue.use(VueAnimatedList)

import { sync } from 'vuex-router-sync'
sync(store, router)
router.start(App, '#app')

