const { Pokemon, Type } = require('../db.js');
const  pokemons  = require ("./pokemons.js");

const getPokemonById = async (req, res) => {
    try{
        //Traigo el ID de los parametros
        let { id } = req.params;

        //Creo una variable pokemonFind para guardar el pokemon a buscar
        let pokemonFind = null;

        //Compruebo si el ID no es un numero
        if (isNaN(id)){
            //Si el ID no es un numero lo busca en la base de datos y lo guardo en "pokemonFind"
            pokemonFind = await Pokemon.findByPk(id, {
                include:{
                    model:Type,
                    attribute: ["name"],
                    through: { attribute:[] } },
                attribute: { exclude:['Types'] }
            });

            //Desestructuro pokemonFind separando el tipo del resto de los atributos
            const { Types, ...rest } = pokemonFind.toJSON();
            //Recorro types para buscar unicamente el nombre del tipo
            pokemonFind = { ...rest, type: Types.map(type => type.name)}    
        } 

        else {
            //Traigo todos los pokemones y los cargo en arrePokemones
            arrePokemones = await pokemons();
            let i=0;
            let bool = false;

            //En el while itero hasta encontrar el pokemon con ese ID
            while(!bool){
                if(arrePokemones[i].id == id){
                    bool = true;
                    console.log("hola")
                    pokemonFind = arrePokemones[i];
                }
                i++;
            };
        }
        res.status(200).json(pokemonFind);
    }
    catch(error){
        res.status(404).json("No se encontro pokemon");
    }
}

module.exports = getPokemonById;