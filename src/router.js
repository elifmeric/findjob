import Vue from 'vue'
import Router from 'vue-router'
import JobList from './views/JobList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/joblist',
      name: 'joblist',
      component: JobList
    },
    {
      path: '/jobdetail',
      name: 'jobdetail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "jobdetail" */ './views/JobDetail.vue')
      }
    }
  ]
})
