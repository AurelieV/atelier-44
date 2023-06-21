import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PaintingsView from '@/views/PaintingsView.vue'
import BagsView from '@/views/BagsView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tableaux',
      name: 'paintings',
      component: PaintingsView
    },
    {
      path: '/sacs',
      name: 'bags',
      component: BagsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
  ]
})

export default router
