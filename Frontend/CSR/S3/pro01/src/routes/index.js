import { createRouter, createWebHistory } from 'vue-router'

// Import your components
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import User from '@/views/User.vue'
import Setting from '@/components/users/Setting.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  {path: '/user/:id',component: User,
    children:[
      { path: 'setting', component: Setting},
    ]
  },
  // 404 not found
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router