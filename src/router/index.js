import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { showHeader: true },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: { showHeader: false },
    },
    {
      path: '/components',
      name: 'components-demo',
      component: () => import('../views/ComponentsDemoView.vue'),
      meta: { showHeader: false },
    },
    {
      path: '/component-demo',
      name: 'component-demo',
      component: () => import('../views/ComponentDemo.vue'),
      meta: { showHeader: true },
    },
    {
      path: '/naive-ui-demo-form',
      name: 'naive-ui-demo-form',
      component: () => import('../views/NaiveUiDemoForm.vue'),
      meta: { showHeader: true },
    },
    {
      path: '/newebpay',
      name: 'newebpay',
      component: () => import('../views/Newebpay.vue'),
      meta: { showHeader: false },
    }
  ]
})

export default router
