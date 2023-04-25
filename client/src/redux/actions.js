import axios from 'axios';

export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_DETAIL_POKEMON = 'GET_DETAIL_POKEMON';
export const GET_POKEMON_NAME = 'GET_POKEMON_NAME';
export const FILTER = 'FILTER';
export const FILTERBDDAPI = 'FILTERBDDAPI';
export const ORDER_ASCENDENTE = 'ORDER_ASCENDENTE';
export const ORDER_DECENDIENTE = 'ORDER_DECENDIENTE';
export const ORDER_ASCENDENTE_ATAQUE = 'ORDER_ASCENDENTE_ATAQUE';
export const ORDER_DECENDIENTE_ATAQUE = 'ORDER_DECENDIENTE_ATAQUE';

export const GET_TYPES = 'GET_TYPES';
export const CREATE_POKEMON = 'CREATE_POKEMON';

export const getAllPokemon = () => {
    return async function (dispatch){
        const response = await axios.get('http://localhost:3001/pokemons/');
        dispatch({ type: GET_ALL_POKEMONS, payload: response.data});
    }
}

export const getPokemonDetail = (id) => {
    return async function (dispatch){
        const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
        dispatch({ type: GET_DETAIL_POKEMON, payload: response.data});
    }
}

export const getPokemonName = (name) => {
    return async function (dispatch){
        try{
            const response = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
            dispatch({ type: GET_POKEMON_NAME, payload: response.data});
        }
        catch(error){
            console.log(error.response.data)
            alert(error.response.data)
        }
    }
}

export const orderAscendente = () => {
    return { type: ORDER_ASCENDENTE };
}

export const orderDecendiente = () => {
    return { type: ORDER_DECENDIENTE };
}

export const orderAscendenteAtaque = () => {
    return { type: ORDER_ASCENDENTE_ATAQUE };
}

export const orderDecendienteAtaque = () => {
    return { type: ORDER_DECENDIENTE_ATAQUE };
}

export const filter = (value) => {
    return { type: FILTER, payload:value}
}

export const filterBDDAPI = (value) => {
    return { type: FILTERBDDAPI, payload:value}
}

export const getTypes = () => {
    return async function (dispatch){
        const response = await axios.get('http://localhost:3001/type/');
        dispatch({ type: GET_TYPES, payload: response.data});
    }
}

export const createPokemon = (newPokemon) => {
    return async (dispatch) => {
        const response = await axios.post("http://localhost:3001/pokemons", newPokemon);
        dispatch(createPokemon(response.data));
    };
}
