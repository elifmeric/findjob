import Vue from 'vue'
import Router from 'vue-router'
import JobList from './pages/JobList.vue'
import JobDetail from './pages/JobDetail.vue'
import NotFound from './pages/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // in order to get rid of the #
  routes: [
    {
      path: '/joblist',
      name: 'joblist',
      component: JobList
    },
    {
      path: '/jobdetail',
      name: 'jobdetail',
      component: JobDetail
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    },
  ]
})
