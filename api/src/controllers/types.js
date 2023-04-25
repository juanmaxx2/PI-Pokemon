require("dotenv").config();
const { URL_TYPE } = process.env;
const { Type } = require('../db.js');
const axios  = require ('axios');

const types = async () => {
    //Traigo todos los tipos de pokemones
    let apiData = await axios (`${URL_TYPE}`);

    //Piso apiData con un arreglo que contenga todos los nombres de los pokemones
    apiData = apiData.data.results.map((type) => {
        return{
            name: type.name,
        }
    })

    //Realizo un bulkcreate para guardar en el modelo Type el arreglo apiData, bulkcreate agarra cada componente el arreglo y lo pone en filas en la DB
    await Type.bulkCreate(apiData);
    
    return console.log("se cargo correctamente");
}

module.exports = types;