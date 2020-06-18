import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import NotFound from '@/views/NotFound.vue'
import Statistics from '@/views/Statistics.vue'
import Label from '@/views/Label.vue';
import Money from '@/views/Money.vue';

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    {
      path: '/',
      component: Money
    },
  {
    path: '/money',
    name: 'Money',
    component: Money
  },
  {
    path: '/label',
    name: 'label',
    component:Label
  },
    {
      path:'/statistics',
      name:'statistics',
      component:Statistics
    },
    {
      path:'*',
      component:NotFound
    }
]

const router = new VueRouter({
  routes
})

export default router
