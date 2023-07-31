import { listarPokemons, detalharPokemon } from 'utils-playground';

const pokemons = async (req, res) => {
    const { pagina } = req.query;

    const listaPokemons = await listarPokemons(pagina ?? 5);

    return res.json(listaPokemons);
}

const pokemon = async (req, res) => {
    const { idOuNome } = req.params;

    const pokemonEcontrado = await detalharPokemon(idOuNome);

    const { id, name, height, weight, base_experience, forms, abilities, species } = pokemonEcontrado;

    return res.json({ id, name, height, weight, base_experience, forms, abilities, species });
}

export {
    pokemons,
    pokemon
}