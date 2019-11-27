<template>
  <div class="container">
      <div class="row">
          <div class="col-3" v-for="pok in pokemons" v-bind:key="pok.url">
              <h3>{{pok.name}}</h3>
              <p>{{pok.url}}</p>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import pokemonService from '@/services/PokemonService';
import PokemonListable from '../models/PokemonListable';

@Component
export default class Pokemons extends Vue {

    private pokemons: PokemonListable[] = []; 

    private mounted() {
        pokemonService.getAll().then((data) => {
            this.pokemons = data.results;
        });
    }
}
</script>

<style>

</style>