import * as types from '../mutation-types'

// 元から来た引数の dispatch フィールドを取得するオブジェクト分割代入
export const loadLocalStorage = ({ dispatch }, data) => {
  dispatch(types.SAVE_LOCALSTORAGE, data)
}
