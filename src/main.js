import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Index from './components/index.vue'
import Home from './components/Home.vue'
import Profile from './components/Profile.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Index },
    { path: '/home', component: Home },
    { path: '/profile', component: Profile}
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
import './style.css'
