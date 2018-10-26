<template>
  <div class="left-nav">
    <ul>
        <li>
            <div>
                <!-- <i class="icon iconfont icon-icon_home"></i> -->
                <span>首页</span>
            </div>         
        </li>
        <li>
            <div>
                <i class="icon iconfont icon-zuoye"></i>
                <!-- <span>日常作业</span> -->
            </div>
        </li>
        <li>
            <div>
                <i class="icon iconfont icon-zichanguanli"></i>
                <!-- <span>资产管理</span> -->
            </div>
             <!-- <i class="icon iconfont icon-jiantouxia"></i> -->
        </li>
         <li>
             <div>
                <i class="icon iconfont icon-shishijiankongguanli"></i>
                <!-- <span>监控管理</span> -->
             </div>
              <!-- <i class="icon iconfont icon-jiantouxia"></i>       -->
        </li>
        <li>
            <div>
                <i class="icon iconfont icon-beifenguanli"></i>
                <!-- <span>备份管理</span> -->
            </div>
            <!-- <i class="icon iconfont icon-jiantouxia"></i>            -->
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
 .left-nav{
       color:#fff;
       font-size:10px;
       height:100%;
       background-color: #1D8ce0;
       float:left;
       width:5%;
    }
    .iconfont{
       font-size:24px;
    }
    .left-nav ul{
        padding:0px;
        margin: 0px;
    }
    .left-nav li{
        list-style: none;
        text-align: center;
        border-bottom:1px solid #20a0ff;
        padding:10px;
    }
</style>