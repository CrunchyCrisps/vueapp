import Vue from 'vue'
import Router from 'vue-router'
import Suche from '@/components/Suche'
import Bearbeiten from '@/components/Bearbeiten'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Suche',
      component: Suche,
      props: true
    },
    {
      path: '/edit',
      name: 'Bearbeiten',
      component: Bearbeiten,
      props: true
    }
  ]
})
