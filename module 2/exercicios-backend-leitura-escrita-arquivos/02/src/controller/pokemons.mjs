import { listarPokemons, detalharPokemon } from 'utils-playground';

const pokemons = async (req, res) => {
  try {
    const { pagina } = req.query;

    const listaPokemons = await listarPokemons(pagina ?? 5);

    return res.json(listaPokemons);
  } catch (error) {
    // En caso de una excepción, aquí puedes manejar el error y responder con un mensaje de error apropiado.
    return res.status(500).json({ error: error.message });
  }
};

const pokemon = async (req, res) => {
  try {
    const { idOuNome } = req.params;

    const pokemonEncontrado = await detalharPokemon(idOuNome);

    const { id, name, height, weight, base_experience, forms, abilities, species } = pokemonEncontrado;

    return res.json({ id, name, height, weight, base_experience, forms, abilities, species });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export {
  pokemons,
  pokemon
};
