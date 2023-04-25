require("dotenv").config();
const { URL } = process.env;
const axios  = require ('axios');

const getPokemon = async (arre) => {
    //Realizo traigo de la API del url enviado, por cada pokemon se realiza esta accion
    const pokemon = await axios (arre);
    //type es un arreglo que guarda todos los tipos del pokemones
    let type = [];

    //En este for se guardan los tipos que tiene el pokemon
    for (let i=0; i<pokemon.data.types.length; i++){
        type.push(pokemon.data.types[i].type.name)
    }

    //Retorno un objeto con todos los datos del Pokemones recibidos
    return {
        id: pokemon.data.id,
        name: pokemon.data.name,
        image: pokemon.data.sprites.front_default,
        vida: pokemon.data.stats[0].base_stat,
        ataque: pokemon.data.stats[1].base_stat,
        defensa: pokemon.data.stats[2].base_stat,
        velocidad: pokemon.data.stats[5].base_stat,
        altura: pokemon.data.height,
        peso: pokemon.data.weight,
        type: type,
    }
}

const pokemons = async () => {
    //Traigo la API de Pokemon
    const apiData = await axios (`${URL}`);
    
    // const apiData = await axios (`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1281`);
    //Creo un arreglo para guardar las URL de cada pokemon que llega de la API
    let arrePokemones = []

    //Cargo todas las URL
    apiData.data.results.map((char)=>{
        arrePokemones.push(char.url);
    })

    //Envio todas las URL a una funcion getPokemon, que retorna todos los datos de los pokemones.
    for (let i=0; i<arrePokemones.length;i++){
        //Guardo todos los pokemones en el arreglo anterior mente creado, piso la info nueva en la misma posicion de su URL
        arrePokemones[i] = await getPokemon(arrePokemones[i])
    }

    //Retorno el arreglo de objeton con todos los pokemons
    return arrePokemones;
}

module.exports = pokemons;