const { Pokemon, Type } = require('../db.js');
const pokemons = require('./pokemons.js');

const getPokemon = async (req, res) => {
    try {

        //Traigo todos los pokemones desde la funcion "pokemons"
        let arrePokemones = await pokemons();

        //Cargo en pokemonsBasedeDatos todos los pokemones creados en la base de datos
        let pokemonsBasedeDatos = await Pokemon.findAll({
            include:{
                model:Type,
                attribute: ["name"],
                through: { attribute:[] } },
            attribute: { exclude:['Types'] } });

        //se realiza un mapeo de "pokemonsBasedeDatos" por cada pokemon se desestructura por una parte el Types y por otra el resto de los atributos
        pokemonsBasedeDatos = pokemonsBasedeDatos.map(pokemon => {
            const {Types, ...rest} = pokemon.toJSON();
            //Luego este return retorna los anteriores atributos y el resultado del mapeo de type, el cual es traer unicamente el atributo name de cada elemento del arreglo
            return { ...rest, type: Types.map(type => type.name)}
        })

        //Reviso si encuentra un nombre de pokemon por query
        let {name} = req.query;

        if (!name){
            //Si no existe nombre muestro un arreglo con los pokemones de la base de datos y despues los pokemones de el arreglo
            res.status(200).json([...pokemonsBasedeDatos, ...arrePokemones]);
        }

        else {
            //Si existe el nombre
            name = name.toLowerCase();
            //Busco el nombre en la base de datos
            let pokemonFind = await Pokemon.findOne({ where: { name:name } })

            //Si no lo encuentro, busco en la API
            if (!pokemonFind){
                let i=0;
                let bool = false
                while(!bool){
                    //Recorro la API hasta encontrarlo
                    if(arrePokemones[i].name.toLowerCase() === name){
                        bool=true;
                        pokemonFind = arrePokemones[i];
                    }
                    i++;
                }
            }
            res.status(200).json(pokemonFind);
        }
        
    }
    catch (error) {
        res.status(404).json('No se encontró el pokemon!!');
    }
}

module.exports = getPokemon;