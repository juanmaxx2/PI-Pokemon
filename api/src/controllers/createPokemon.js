require("dotenv").config();
const { URL } = process.env;
const axios = require ('axios');
const { Pokemon, Type } = require('../db.js');

const createPokemon = async (req, res) => {
    try {
        //Desestructuro lo que viene como parametro
        const { name, image, vida, ataque, defensa, velocidad, altura, peso, type } = req.body;
        

        const arreTypes = await Promise.all(type.map(async(t)=>{
            return await Type.findOne({ where: { name: t } });
        }))

        //Se crea el pokemon nuevo
        let newPokemon = await Pokemon.create({ name, image, vida, ataque, defensa, velocidad, altura, peso });
        
        //Asocia el pokemon con el tipo enviado anteriormente
        newPokemon.addType(arreTypes);

        res.status(200).json(newPokemon);
    }
    catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = createPokemon;