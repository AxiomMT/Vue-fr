import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/user/name',
      name: 'user',
      component: () => import('../views/User.vue')
    }
  ]
})
