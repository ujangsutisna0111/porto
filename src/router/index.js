import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ResumeView from '../views/ResumeView.vue'
import ServicesView from '../views/ServicesView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/resume', name: 'resume', component: ResumeView },
    { path: '/services', name: 'services', component: ServicesView },
    { path: '/portfolio', name: 'portfolio', component: PortfolioView },
    // Detail proyek dibuka sebagai popup di atas halaman Portfolio (bukan page baru),
    // tapi URL tetap berubah supaya link ke proyek tertentu bisa di-share.
    { path: '/portfolio/:slug', name: 'portfolio-detail', component: PortfolioView },
    { path: '/contact', name: 'contact', component: ContactView }
  ]
})

export default router
