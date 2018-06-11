import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
import App from '../App.vue'

const icon = r => require.ensure([], () => r(require('../components/icon')), 'icon')
const x_button = r => require.ensure([], () =>r(require('../components/x-button')), 'x_button')


export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [
        {
            path: 'icon',
            component: icon
        },
        {
            path: 'x-button',
            component: x_button
        }
      ]
    }
  ]
})
