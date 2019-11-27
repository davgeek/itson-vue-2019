import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue';
import Pokemons from '@/views/Pokemons.vue';
import PokemonDetail from '@/components/PokemonDetail.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'pokemons',
    component: Pokemons,
  },
  {
    path: '/:id',
    component: PokemonDetail,
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
