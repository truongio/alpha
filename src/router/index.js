import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '@/components/StartPage'
import SearchResultGrid from '@/components/SearchResultGrid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage
    },
    {
      path: '/search-result-grid',
      name: 'SearchResultGrid',
      component: SearchResultGrid
    }
  ]
})
