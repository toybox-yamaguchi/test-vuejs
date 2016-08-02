import twitter from '../../modules/api/twitter'
import * as types from '../mutation-types'

// 元から来た引数の dispatch フィールドを取得するオブジェクト分割代入
export const getTimeline = ({ dispatch }) => {
  // 非同期API
  twitter.getTimeline(tweets => {
    dispatch(types.RECEIVE_TIMELINE, tweets)
  }, true)
}

export const addTweet = ({ dispatch }, message) => {
  // 非同期API
  twitter.getNewTweet(tweet => {
    dispatch(types.ADD_TWEET, tweet)
  }, message, true)
}
