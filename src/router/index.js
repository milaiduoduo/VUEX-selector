import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import List from '@/components/list';
import SelectInput from '@/components/selectInput'
import Selector from '@/components/selector'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Selector
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/selectInput',
      component: SelectInput
    }
  ]
});

export default router;
