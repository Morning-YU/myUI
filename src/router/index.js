import Vue from 'vue'
import Router from 'vue-router'

const CommonLayout = () => import('../components/layout')
const swiperView = () => import('../views/swiperView')
const dialogView = () => import('../views/dialogView')
const selectView = () => import('../views/selectView')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CommonLayout',
      component: CommonLayout,
      children: [
        {
          path: '/swiperView',
          name: 'swiperView',
          component: swiperView
        },
        {
          path: '/dialogView',
          name: 'dialogView',
          component: dialogView
        },
        {
          path: '/selectView',
          name: 'selectView',
          component: selectView
        }
      ]
    }
  ]
})
