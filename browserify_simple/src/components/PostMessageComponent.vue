<!-- 新規ポスト作成ウィンドウ -->
<!-- 本コンポーネントはTimeline以外でも利用される -->
<!-- Storeを持つ必要が無いのでVuexに依存しない -->

<template>
  <!-- バインディングに失敗すると動かない -->
  <div
    class="card"
    v-if="isShow"
    transition="expand"
  >
    <h4 class="card-header">投稿用フォーム</h4>
    <div class="card-inverse card-block" >
      <label class="control-label" for="textarea1">今何してる？</label>
      <div class="text-xs-right">
      <textarea
        id="textarea1"
        v-model="message"
        placeholder="デフォルト文字列"
        class="form-control"
        rows="3"
        @input="saveStubMessage"
      ></textarea>
        <button @click="postMessage" class="btn btn-primary">投稿</button>
      </div>
    </div>
  </div>
</template>

<script>
  import store from 'store'

  export default {
    props: {
      message: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        isShow: false // data なり props なりで定義されていない値をバインドするとエラーを吐かずに動かない
      }
    },
    methods: {
      // 投稿に使用するアクションは外部から挿入される
      // post: function () {
      postMessage () {
        this.$dispatch('event-post', this.message)

        // this.isShow = false
        // let self = this
        // setTimeout(() => { self.isShow = true }, 1000)
      },
      saveStubMessage () {
        store.set('stubMessage', this.message)
      }
    },
    created () {
      let self = this
      setTimeout(() => { self.isShow = true }, 1000)

      this.message = store.get('stubMessage')
    }
  }
</script>

<style>
  /* 常に表示 */
  .expand-transition {
    transition: all .3s ease;
    height: 300px;
    overflow: hidden;
  }

  /* .expand-enter は entering に対する開始状態を定義 */
  /* .expand-leave は leaving に対する終了状態を定義 */
  .expand-enter, .expand-leave {
    height: 0;
    opacity: 0;
  }
</style>
