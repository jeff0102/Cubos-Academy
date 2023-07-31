import { listarPokemons, detalharPokemon } from 'utils-playground';

const pokemons = async (req, res) => {
  try {
    const { pagina } = req.query;

    // Intenta obtener la lista de Pokémon utilizando la función listarPokemons.
    // Si ocurre una excepción, será capturada por el bloque catch.
    const listaPokemons = await listarPokemons(pagina ?? 5);

    return res.json(listaPokemons);
  } catch (error) {
    // En caso de una excepción, aquí puedes manejar el error y responder con un mensaje de error apropiado.
    return res.status(500).json({ error: 'Erro ao obter a lista de pokémons' });
  }
};

const pokemon = async (req, res) => {
  try {
    const { idOuNome } = req.params;

    // Intenta obtener el detalle del Pokémon utilizando la función detalharPokemon.
    // Si ocurre una excepción, será capturada por el bloque catch.
    const pokemonEncontrado = await detalharPokemon(idOuNome);

    const { id, name, height, weight, base_experience, forms, abilities, species } = pokemonEncontrado;

    return res.json({ id, name, height, weight, base_experience, forms, abilities, species });
  } catch (error) {
    // En caso de una excepción, aquí puedes manejar el error y responder con un mensaje de error apropiado.
    return res.status(500).json({ error: 'Erro ao obter o detalhe do Pokémon' });
  }
};

export {
  pokemons,
  pokemon
};
