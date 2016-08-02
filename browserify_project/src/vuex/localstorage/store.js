import {
  SAVE_LOCALSTORAGE
} from '../mutation-types'

import store from 'store'

// initial state
// const state = store.get('vuexstorage')
// FIXME: 書きかけ､引数で名前を渡して取得できるように作りたい
const state = () => {
  return store.get('vuexstorage')
}

// mutations
const mutations = {
  [SAVE_LOCALSTORAGE] (state, newState) {
    store.set('vuexstorage', newState)
  }
}

export default {
  state,
  mutations
}
