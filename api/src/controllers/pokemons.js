require("dotenv").config();
const { URL } = process.env;
const axios = require ('axios');

const getPokemon = async (pokemonUrl) => {
  const { data } = await axios(pokemonUrl);
  return {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    vida: data.stats[0].base_stat,
    ataque: data.stats[1].base_stat,
    defensa: data.stats[2].base_stat,
    velocidad: data.stats[5].base_stat,
    altura: data.height,
    peso: data.weight,
    type: data.types.map(type => type.type.name),
  };
};

const pokemons = async () => {
  const { data: { results } } = await axios(URL || 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1281');
  const pokemonData = await Promise.all(results.map(char => getPokemon(char.url)));
  return pokemonData;
}

module.exports = pokemons;