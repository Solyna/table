<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="hellohi">
      <router-view class="aaa"></router-view>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'monitor',
    data () {
      return {
        msg: 'Hi, I am yuebanjiang'
      }
    }
  }
</script>
<style scoped>
</style>