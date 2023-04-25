import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemon, getPokemonName } from '../../redux/actions';
import { Cards, SearchBar,NavBar } from '../../components';
import style from "./Home.module.css";

const Home = () => {
    
    const pokemones = useSelector((state) => state.pokemones)
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    useEffect (()=>{
        dispatch(getAllPokemon());
    }, [dispatch]);

    function handlerChange(event){
        setName(event.target.value);
    }

    function handlerSubmit(event){
        event.preventDefault();
        dispatch(getPokemonName(name));
        setName('');
    }

    return (
        <div className={style.Home}>
            <NavBar />
            <div className={style.SearchBar}>
            <SearchBar handlerChange={handlerChange} handlerSubmit={handlerSubmit}/>
            </div>
            <div>
                <Cards
                pokemones={pokemones}/>
            </div>
        </div>
    )
}

export default Home;