import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
import App from '../App.vue'

const home = r => require.ensure([], () => r(require('../page/home')), 'home')
const study = r => require.ensure([], () => r(require('../page/study/study')), 'study')
const icon = r => require.ensure([], () => r(require('../components/icon')), 'icon')
const x_button = r => require.ensure([], () =>r(require('../components/x-button')), 'x_button')
const divider = r => require.ensure([], () => r(require('../components/divider')), 'divider')
const flexbox = r => require.ensure([], () => r(require('../components/flexbox')), 'flexbox')
export default new Router({
  routes: [

    {
      path: '/',
      component: App,
      children: [
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/study',
            component: study
        },
        {
            path: 'icon',
            component: icon
        },
        {
            path: 'x-button',
            component: x_button
        },
        {
            path: 'divider',
            component: divider
        },
        {
            path: 'flexbox',
            component: flexbox
        }
      ]
    }
  ]
})
