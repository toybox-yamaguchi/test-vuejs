// API のシミュレート
const _tweets = [
  {'id': 1, 'text': 'ここにテキストが入ります', 'date': Date.now()},
  {'id': 2, 'text': 'ここにテキストが入ります', 'date': Date.now()},
  {'id': 3, 'text': 'ここにテキストが入ります', 'date': Date.now()}
]

// import Linq from 'linq-es6'
import Enumerable from 'linq'

export default {
  stub: [],
  getTimeline (callback, isAsync = true) {
    if (this.stub.length <= 0) {
      let newStub = Enumerable.range(0, 200)
      // .selectMany(x => _tweets)
        .select(i => {
          let t = Object.assign({}, _tweets[0]) // コピー
          t.id = i
          t.text = 'Default'
          return t
        })
        .toArray()

      this.stub = newStub
    }

    if (isAsync) {
      setTimeout(() => callback(this.stub), 100)
    }
    else {
      callback(this.stub)
    }
  },
  getNewTweet (callback, message, isAsync = true) {
    let newTweet = Object.assign({}, _tweets[0])
    newTweet.text = message
    newTweet.date = Date.now()

    if (isAsync) { setTimeout(() => callback(newTweet), 100) }
    else { callback(newTweet) }
  }
}

