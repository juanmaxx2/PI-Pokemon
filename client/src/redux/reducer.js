import { GET_ALL_POKEMONS, GET_DETAIL_POKEMON, GET_POKEMON_NAME, ORDER_ASCENDENTE, ORDER_DECENDIENTE, ORDER_ASCENDENTE_ATAQUE, ORDER_DECENDIENTE_ATAQUE, FILTER, GET_TYPES, CREATE_POKEMON, FILTERBDDAPI } from './actions'

const initialState = {
    pokemones: [],
    pokemonesDos: [],
    pokemonesGuardado: [],
    pokemonesDetail: {},
    types: []
};

const rootReducer = (state = initialState, action) => {
    const { pokemonesDos } = state;
    switch(action.type){
        case GET_ALL_POKEMONS:
            return { ...state, pokemones: action.payload, pokemonesDos: action.payload, pokemonesGuardado: action.payload };
        case GET_DETAIL_POKEMON:
            return { ...state, pokemonesDetail: action.payload };
        case GET_POKEMON_NAME:
            return { ...state, pokemones: action.payload };


        case ORDER_ASCENDENTE:
            return { ...state, pokemones: state.pokemones.sort((a,b)=>a.name.localeCompare(b.name)) };
        case ORDER_DECENDIENTE:
            return { ...state, pokemones: state.pokemones.sort((a,b)=>b.name.localeCompare(a.name)) };
        case ORDER_ASCENDENTE_ATAQUE:
            return { ...state, pokemones: state.pokemones.sort((a,b)=>a.ataque-b.ataque) };
        case ORDER_DECENDIENTE_ATAQUE:
            return { ...state, pokemones: state.pokemones.sort((a,b)=>b.ataque-a.ataque) };   
            
            
        case FILTER:
            if (action.payload !== "todos"){
                const pokemonesFilter = pokemonesDos.filter((pokemon)=>{
                    if(!pokemon.type.length){
                        if (pokemon.type === action.payload)return true;
                        else return false;
                    }
                    else {
                        let i=0;
                        while(i<pokemon.type.length){
                            if (pokemon.type[i] === action.payload) return true;
                            else i++;
                        }
                        return false;
                    }
    
                })
                return { ...state, pokemones: pokemonesFilter }
            }
            else{
                return { ...state, pokemones: pokemonesDos }
            }

        case FILTERBDDAPI:
            if(action.payload !== 'todos'){
                const pokemonesFilterBDD = pokemonesDos.filter((pokemon)=>{
                    if(action.payload === 'API'){
                        if(!isNaN(pokemon.id)) return true;
                        else return false;
                    }
                    if(action.payload === 'BaseDeDatos'){
                        if(isNaN(pokemon.id)) return true;
                        else return false;
                    }
                    else return false;
                })
                return { ...state, pokemones: pokemonesFilterBDD }
            }
            return { ...state, pokemones: pokemonesDos}

        case GET_TYPES:
            return { ...state, types: action.payload };
        case CREATE_POKEMON:
            return { ...state, pokemones: action.payload };
        default:
            return { ...state };
    }
};

export default rootReducer;