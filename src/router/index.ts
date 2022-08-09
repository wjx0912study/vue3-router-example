import {
  createRouter,
  RouteRecordRaw,
  NavigationGuardNext,
  createWebHashHistory,
  RouteLocationNormalized
} from 'vue-router'
import Page1 from '../views/Page1.vue'
import Page1ChildHome from '../views/Page1ChildHome.vue'
import Page1ChildConfig from '../views/Page1ChildConfig.vue'
import Page1ChildFav from '../views/Page1ChildFav.vue'
import Page2 from '../views/Page2.vue'

const routes: RouteRecordRaw[] = [
  {
    //catch斜杠，给router-view一个初始值，我也可以不给
    path:"/",
    redirect:"/page1"
  },
  {
    path: '/page1',
    component: Page1,
    children:[
      //如果都不加,相当于/page1的默认值
      {
        path:'/page1/',//page1
        component:Page1ChildHome
      },
      //如果直接往后拼，是绝对路径
      {
        path:'/page1/fav',
        component:Page1ChildFav
      },
      {
        path:'/page1/config',
        component:Page1ChildConfig
      },
    ]
  },
  {
    path: '/page2',
    component: Page2,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

/*
router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    next()
  }
)
*/

export default router
