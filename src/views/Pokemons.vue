<template>
  <div class="container">
      <div class="row">
          <div class="col-3" v-for="pok in pokemons" v-bind:key="pok.url">
              <router-link :to="{'path': pok.name}"><h3>{{pok.name}}</h3></router-link>
              <p>{{pok.url}}</p>
          </div>
      </div>
      <div class="row">
          <div class="col-12">
              <Input name="Pokemon" type="text" v-model="pokemonName" />
          </div>
          <div class="col-12">
              {{pokemonResult}}
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import pokemonService from '@/services/PokemonService';
import PokemonListable from '../models/PokemonListable';

import Input from '@/components/Input.vue';
import Pokemon from '../models/Pokemon';

@Component({
    components: {
        Input,
    }
})
export default class Pokemons extends Vue {

    private pokemons: PokemonListable[] = []; 
    private pokemonName: string = '';
    private pokemonResult: Pokemon = {} as any;

    private mounted() {
        pokemonService.getAll().then((data) => {
            this.pokemons = data.results;
        });
    }

    @Watch('pokemonName')
    private async watchPokemonName(value: string) {
        this.pokemonResult = await pokemonService.getById(value);
    }
}
</script>

<style>

</style>