import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../layout/index.vue'
import SimpleRouterView from '../layout/SimpleRouterView'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/Button',
    meta: { title: '示例', icon: 'home', level: 'top' },
    children: [{
      path: '/Button',
      name: 'Button',
      component: () => import('../views/demo/CGButtonDemo'),
      meta: { title: '按钮', icon: 'mdi-home', level: 'side' }
    },{
      path: '/Link',
      name: 'Link',
      component: () => import('../views/demo/CGLinkDemo'),
      meta: { title: '链接', icon: 'mdi-home', level: 'side' },
    },{
      path: '/Form',
      name: 'Form',
      meta: { title: '表单', icon: 'mdi-home', level: 'side' },
      component: SimpleRouterView,
      children: [{
        path: '/Form/Input',
        name: 'Input',
        component: () => import('../views/demo/CGInputDemo'),
        meta: { title: '输入框', icon: 'mdi-home', level: 'side' },
      },{
        path: '/Form/Select',
        name: 'Select',
        component: () => import('../views/demo/CGSelectDemo'),
        meta: { title: '下拉框', icon: 'mdi-home'},
      }]
    },{
      path: '/Text',
      name: 'Text',
      meta: { title: '文字', icon: 'mdi-home', level: 'side' },
      component: SimpleRouterView,
      children: [{
        path: '/Text/Text',
        name: 'Text',
        component: () => import('../views/demo/CGTextDemo'),
        meta: { title: '文字', icon: 'mdi-home'},
      },{
        path: '/Text/Message',
        name: 'Message',
        component: () => import('../views/demo/CGMessageDemo'),
        meta: { title: '消息', icon: 'mdi-home'},
      },{
        path: '/Text/Table',
        name: 'Table',
        component: () => import('../views/demo/CGTableDemo'),
        meta: { title: '表格', icon: 'mdi-home'},
      }]
    }]
  },
  {
    path: '/aaa/',
    component: Layout,
    redirect: '/aaa/aaa',
    meta: { title: 'AAA', icon: 'home', level: 'top' },
    children: [{
      path: '/aaa/aaa',
      name: 'HomeA',
      component: () => import('../views/Home'),
      meta: { title: 'AAA', icon: 'home', level: 'top', hideBreadCrumb: true}
    }]
  },
  {
    path: '/bbb/',
    component: Layout,
    redirect: '/Home',
    meta: { title: 'BBB', icon: 'phone', level: 'top' },
    children: [{
      path: '/bbb/bbb',
      name: 'HomeB',
      component: () => import('../views/Home'),
      meta: { title: 'BBB', icon: 'phone', level: 'top' }
    },{
      path: '/bbb/ccc',
      name: 'HomeC',
      component: () => import('../views/Home'),
      meta: { title: 'CCC', icon: 'phone', level: 'side' }
    },{
      path: '/bbb/ddd',
      name: 'HomeD',
      component: () => import('../views/Home'),
      meta: { title: 'DDD', icon: 'phone', level: 'side' }
    },{
      path: '/bbb/eee',
      name: 'HomeE',
      component: () => import('../views/Home'),
      meta: { title: 'EEE', icon: 'phone', level: 'side' }
    }]
  },
  {
    path: '/ggg/',
    component: Layout,
    redirect: '/ggg/ggg',
    meta: { title: 'GGG', icon: 'home', level: 'top' },
    children: [{
      path: '/ggg/ggg',
      name: 'HomeG',
      component: () => import('../views/Home'),
      meta: { title: 'HomeG', icon: 'home', hideBreadCrumb: true}
    }]
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
