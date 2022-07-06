import Vue from 'vue'
import Router from 'vue-router'

const CommonLayout = () => import('../components/layout')
const swiperView = () => import('../views/swiperView')
const dialogView = () => import('../views/dialogView')
const selectView = () => import('../views/selectView')
const datepickerView = () => import('../views/datepickerView')
const testView = () => import('../views/testView')
const backtoTopView = () => import('../views/backtoTopView')
const processView = () => import('../views/processView.vue')
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
        },
        {
          path: '/datepickerView',
          name: 'datepickerView',
          component: datepickerView
        },
        {
          path: '/testView',
          name: 'testView',
          component: testView
        },
        {
          path: '/backtoTopView',
          name: 'backtoTopView',
          component: backtoTopView
        },
        {
          path: '/processView',
          name: 'processView',
          component: processView
        }

      ]
    }
  ]
})
