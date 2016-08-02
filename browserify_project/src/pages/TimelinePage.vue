<template>
  <!-- バインディングに失敗すると動かない -->
  <div class="cart">
    <post-message-component
      @event-post="addTweet"
    ></post-message-component>

    <div>
      <button v-on:click="update" class="btn btn-info-outline">Timeline update</button>
    </div>

    <p v-show="tweets.length===0"><i>Please add some tweets to cart.</i></p>

    <div v-show="tweets.length > 0">
      <div
       v-for="t in tweets | orderBy 'date' -1"
       transition="item"
      >
        <!-- 動的な値を渡すときは v-bind:propname (省略して:propname) -->
        <tweet-component v-bind:text="t.text" v-bind:date="t.date"></tweet-component>
      </div>
    </div>

  </div>
</template>

<script>
  import { getTimeline, addTweet } from '../vuex/timeline/actions.js'
  import TweetComponent from '../components/TweetComponent.vue'
  import PostMessageComponent from '../components/PostMessageComponent.vue'

  export default {
    components: {
      TweetComponent,
      PostMessageComponent
    },
    vuex: {
      // storeへの直接アクセスを防ぐためのもの｡引数に親コンポーネント(App.vue)からstateが注入される
      // getters は pure function でなければならない
      getters: {
        // ここの引数に入るのは store.state
        // route は vue-router-sync 使ってるからある
        tweets: ({ timeline, route }) => {
          var id = parseInt(route.params.id)
          console.log('id: ' + id)
          return timeline.all
        }
      },
      actions: {
        getTimeline,
        addTweet
      }
    },
    created () {
      this.getTimeline()
    },
    methods: {
      // アロー関数を使うとthisが束縛されるので使わない
      update: function () {
        this.getTimeline()
      }
    }
  }
</script>

<style>

.cart {
  width: 600px;
}
.checkout-table {
  width: 100%;
}

.checkout-table th {
  text-align: left;
  padding: 15px 0px;
  border-bottom: 1px solid #aaa;
}

.checkout-table td {
  padding: 8px 0px;
}

.checkout-button {
  float: right;
  width: 120px;
  height: 40px;
  margin-top: 20px;
}

.total td {
  border-top: 1px solid #aaa;
  padding-top: 10px;
}

.item-move {
  /* applied to the element when moving */
  transition: transform .5s cubic-bezier(.55,0,.1,1);
}
</style>
