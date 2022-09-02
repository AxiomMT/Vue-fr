/*  Course version (not working) */
// import Vue from 'vue'
// import Router from 'vue-router'
// import HomeView from '../views/Home.vue'

// Vue.use(Router)

// export default new Router({
//     routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/about',
//       name: 'about',
//       component: () => import('../views/About.vue')
//     },
//     {
//       path: '/user/name',
//       name: 'user',
//       component: () => import('../views/User.vue')
//     }
//   ]
// })

/* Custom version (working) */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import UserView from '../views/User.vue'
import AboutView from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }, 
  {
    path: '/user/:name',
    name: 'user', 
    component: UserView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
