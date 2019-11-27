<template>
    <div class="container">
        <div class="row">
            <h1 v-if="isLoading">Cargando...</h1>
            <div v-else class="col-8">
                <h1>{{pokemonData.name}}</h1>
                <h3>{{pokemonData.id}}</h3>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import pokemonService from '@/services/PokemonService';
import Pokemon from '../models/Pokemon';

@Component
export default class Pokemons extends Vue {
    //@Prop() url!: string;

    // @ts-ignore
    private pokemonData: Pokemon = {};
    private isLoading: boolean = true;

    private async mounted() {
        if(this.$route.params.id) {
            this.pokemonData = await pokemonService.getById(this.$route.params.id);
        }
    }

    @Watch('pokemonData')
    private watchPokemon() {
        this.isLoading = false;
    }

}
</script>

<style>

</style>