import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import before from './beforeEach'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(before)

export default router
