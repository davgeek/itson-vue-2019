import PokemonListable from './PokemonListable';

export default interface PokemonPageable {
    count: number;
    next: string;
    previous: string;
    results: PokemonListable[];
}