import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Scad from '/src/components/Scad.vue'
import Contab from '/src/components/Contab.vue'

const Login = { template: '<p>this is the login component</p>' }

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { 
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'login',
      path: '/login',
      component: Login,
    },
    { 
      name: 'scad',
      path: '/scad',
      component: Scad
    },
    {
      name: 'contab',
      path: '/contab',
      component: Contab
    },
  ],
})

const app = createApp(App)
app.use(router)

app.mount('#app')
