const { Type } = require('../db.js');


const getType = async (req, res) => {
    try{
        //Traigo todos los tipos de pokemones de la Base de Datos
        let TiposBaseDeDatos = await Type.findAll();

        res.status(200).json(TiposBaseDeDatos);
    }
    catch(error){
        res.status(404).json({error: error.message});
    }
}

module.exports = getType;