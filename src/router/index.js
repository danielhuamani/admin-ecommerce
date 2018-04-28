import Vue from 'vue'
import Router from 'vue-router'
import ContentPage from '@/pages/system/ContentPage'
import Login from '@/pages/system/Login'
import dashboardRouter from './dashboard'
import productRouter from './product'
import orderRouter from './order'
import middlewareAuth from '@/middleware/auth'

Vue.use(Router)
const routerChildren = [
  ...dashboardRouter,
  ...productRouter,
  ...orderRouter
]
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'page',
      component: ContentPage,
      auth: true,
      children: routerChildren,
      beforeEnter: middlewareAuth
    }
  ]
})
