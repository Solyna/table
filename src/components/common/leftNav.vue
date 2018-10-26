<template>
  <div class="left-nav">
    <ul>
        <li>
            <div>
                <i class="icon iconfont icon-icon_home"></i>
                <span>首页</span>
            </div>         
            <i class="icon iconfont icon-jiantouxia"></i>
        </li>
        <li>
            <div>
                <i class="icon iconfont icon-zuoye"></i>
                <span>日常作业</span>
            </div>
            <i class="icon iconfont icon-jiantouxia"></i>
        </li>
        <li>
            <div>
                <i class="icon iconfont icon-zichanguanli"></i>
                <span>资产管理</span>
            </div>
             <i class="icon iconfont icon-jiantouxia"></i>
        </li>
         <li>
             <div>
                <i class="icon iconfont icon-shishijiankongguanli"></i>
                <span>监控管理</span>
             </div>
              <i class="icon iconfont icon-jiantouxia"></i>      
        </li>
        <li>
            <div>
                <i class="icon iconfont icon-beifenguanli"></i>
                <span>备份管理</span>
            </div>
            <i class="icon iconfont icon-jiantouxia"></i>           
        </li>
</ul>
  </div>
</template>
<script>
export default {
  name: "leftNav",
  data() {
    return {};
  }
};
</script>
<style>
.left-nav {
  color: #fff;
  font-size: 10px;
  height: 100%;
  background-color: #1d8ce0;
  float: left;
  width: 15%;
}
.iconfont {
  font-size: 18px;
  margin-right: 15px;
}
.left-nav ul {
  padding: 0px;
  margin: 0px;
}
.left-nav li {
  list-style: none;
  text-align: center;
  border-bottom: 1px solid #20a0ff;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.left-nav li div {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.left-nav li div span {
  font-size: 15px;
  margin-right: 10px;
}
.left-nav li .icon-jiantouxia {
  font-size: 4px;
}
</style>