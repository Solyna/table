<template>
  <div id="app">
    <!-- 顶部导航 -->
    <topNav></topNav>
    <!-- 左侧导航 -->
    <leftNav></leftNav>
    <div class="main">
      <router-view/>
    </div>
   
  </div>
</template>

<script>
import topNav from "@/components/common/topNav";
import leftNav from "@/components/common/leftNav";
export default {
  name: "App",
  components: {
    topNav,
    leftNav
  }
};
</script>

<style>
#app {
  font-family: "Microsoft YaHei", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  height: 100%;
}
.main {
  float: left;
  width: 85%;
  background-color: #eff2f7;
  height: 100%;
  overflow: hidden;
}
</style>
