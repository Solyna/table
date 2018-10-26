import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import assets from '@/components/page/assets'
import backup from '@/components/page/backup'
import dailyWork from '@/components/page/dailyWork'
import monitor from '@/components/page/monitor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:Home,
      // children:[
      //   {path:'/',component:Home},
      //   {path:'dailyWork',component:dailyWork},
      //   {path:'assets',component:assets},
      //   {path:'monitor',component:monitor},
      //   {path:'backup',component:backup}
      // ]
    }
  ]
})
