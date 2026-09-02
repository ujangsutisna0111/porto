import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import reveal from './directives/reveal'

const app = createApp(App)
app.use(router)
app.directive('reveal', reveal)
app.mount('#app')
