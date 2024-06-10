import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import PrintPage from './pages/PrintPage.vue'

const routes = [
  { name: 'home', path: '/', component: HomePage },
  { name: 'print', path: '/print/:code', component: PrintPage }
]

export default createRouter({
  history: createMemoryHistory(),
  routes
})
