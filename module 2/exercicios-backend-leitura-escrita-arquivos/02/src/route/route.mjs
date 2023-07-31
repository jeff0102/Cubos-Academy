import express from 'express';
import { pokemons, pokemon } from '../controller/pokemons.mjs';

const rotas = express();

rotas.get('/pokemon', pokemons);
rotas.get('/pokemon/:idOuNome', pokemon);

export default rotas;