import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '@/components/StartPage'
import SearchResultGrid from '@/components/SearchResultGrid'
import CreatePersonForm from '@/components/CreatePersonForm'

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
    },
    {
      path: '/create-person-form',
      name: 'CreatePersonForm',
      component: CreatePersonForm
    }
  ]
})
