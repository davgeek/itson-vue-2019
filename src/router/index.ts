import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue';
import Pokemons from '@/views/Pokemons.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'pokemons',
    component: Pokemons,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
