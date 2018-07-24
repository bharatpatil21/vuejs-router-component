import Vue from 'vue'
import Router from 'vue-router'
import Skills from './components/skills/skills.vue'
import About from './components/about/about.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skills',
      component: Skills
    },
    {
      path: '/about/',
      name: 'about',
      component: About
    }
  ]
})
