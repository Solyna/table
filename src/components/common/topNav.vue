<template>
    <div class="top-nav">
        <a class="navbar-brand">
            <img src="https://magicbox.bkclouds.cc/static_api/v3/bk/images/logo3.png" class="logo">
        </a>
        <div class="navbar-collapse">
            <ul class="navbar-left">
                <li>
                    <a href="#">首页</a>
                </li>
                <li>
                    <a href="#">服务列表</a>
                </li>
            </ul>
            <ul class="navbar-right">
                <li>
                    <i class="icon iconfont icon-user"></i>
                    <a href="#">管理员</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: "topNav",
  data() {
    return {};
  }
};
</script>
<style>
.top-nav {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.navbar-brand {
  font-size: 18px;
  line-height: 20px;
}
.logo {
  display: block;
  margin-left: 15px;
}
.navbar-collapse {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.navbar-left {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.navbar-left > li {
  margin-right: 20px;
  height: 50px;
  line-height: 50px;
}
.navbar-left li a {
  padding: 0 15px;
  display: block;
  height: 50px;
  line-height: 50px;
  background: #fff;
  color: #333;
}
.navbar-left li a:hover {
  height: 50px;
  line-height: 50px;
  background: #4a9bff;
  color: #fff;
}
.navbar-right li {
  margin-right: 15px;
  overflow: hidden;
  color: #333;
  display: flex;
  align-items: center;
}
.navbar-right li a {
  color: #333;
}
.navbar-right li .iconfont {
  font-size: 16px;
}
</style>


