import axios from 'axios';
import Pokemon from '@/models/Pokemon';
import PokemonPageable from '@/models/PokemonPageable';

const URL = 'https://pokeapi.co/api/v2/';

class PokemonService {
    public getById(id: number): Promise<Pokemon> {
        return axios.get(`${URL}pokemon/${id}`);
    }

    public getAll(): Promise<PokemonPageable> {
        return axios.get(`${URL}pokemon`);
    }
}

const pokemonService = new PokemonService();
export default pokemonService;
