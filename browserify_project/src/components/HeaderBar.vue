<template>
  <div class="menu-links">
    <a v-link="{path:'/timeline'}">タイムライン</a>
    <a v-link="{path:'/cart'}">返信 ({{ count }})</a>
  </div>
</template>

<script>
import { cartCount } from '../vuex/cart/getters.js'
export default {
  vuex: {
    getters: {
      count: cartCount
    }
  }
}
</script>

<style>
.menu-links a {
  display: inline-block;
  text-decoration: none;
  color: #555;
  margin-right: 30px;
}
</style>
