import { createWebHistory , createRouter } from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import PortfolioView from './views/PortfolioView.vue'
import FormatterView from './views/FormatterView.vue'

const routes = [
  { path: '/', component: PortfolioView},
  { path: '/formatter', component: FormatterView },
  { path: '/:pathMatch(.*)*', name: "404", component:  HelloWorld},
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})