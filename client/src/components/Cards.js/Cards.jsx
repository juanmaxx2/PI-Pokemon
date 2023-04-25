import { useEffect, useState } from 'react';
import { Card, Paginacion } from '../../components';
import { orderAscendente, orderDecendiente, orderAscendenteAtaque, orderDecendienteAtaque, getTypes, filter, filterBDDAPI } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import style from "./Cards.module.css";
import squirtle from '../../images/Pagina principal/squirtle.png'

const Cards = ({pokemones}) => {
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);
    const [Pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(12);
    const maximo = Math.ceil(pokemones.length/porPagina);
    const [ordenando, setOrdenando] = useState(false);

    async function handlerSubmit(event){
        setPagina(1)
        event.preventDefault();
        setOrdenando(true);
        if(event.target.value === 'Ascendente'){
            await dispatch(orderAscendente());
        }
        else {
            await dispatch(orderDecendiente());
        }
        setOrdenando(false);
    }

    async function handlerSubmitAtaque(event){
        setPagina(1)
        event.preventDefault();
        setOrdenando(true);
        if(event.target.value === 'Ascendente'){
            await dispatch(orderAscendenteAtaque());
        }
        else {
            await dispatch(orderDecendienteAtaque());
        }
        setOrdenando(false);
    }

    useEffect (()=>{
        dispatch(getTypes())
    },[dispatch])

    function onChange (event){
        setPagina(1)
        event.preventDefault();
        dispatch(filter(event.target.value))
    }

    function filtrarBDD (event){
        setPagina(1)
        event.preventDefault();
        dispatch(filterBDDAPI(event.target.value))
    }

    const recargar = ()=>{
        window.location.reload()
    }

    return (
        <div>
            {pokemones.length && !ordenando?(
                <div>
                <img src={squirtle} alt='squirtle' className={style.squirtle}/>
                <div className={style.home}>
                <div className={style.button}>
                <div className={style.tipo}>
                    <p>Seleccione de donde traer los Pokemon</p>
                    <select onChange={filtrarBDD}>
                        <option value='todos'>todos</option>
                        <option value='API'>API</option>
                        <option value='BaseDeDatos'>Base De Datos</option>
                    </select>
                    <p>Seleccione un tipo de Pokemon</p>
                    <select onChange={onChange}>
                        <option value='todos'>todos</option>
                        {types.map((type) => {
                            return (
                                <option value={type.name}>{type.name}</option>
                            )
                        })}
                    </select>
                    </div>
                    <div className={style.ordenar}>
                    <p>Ordenar por Nombre</p>
                    <button onClick={handlerSubmit} value='Ascendente'>Ascendente</button>
                    <button onClick={handlerSubmit} value='Decendente'>Decendente</button>
                    </div>
                    <div className={style.ordenar}>
                    <p>Ordenar por Ataque</p>
                    <button onClick={handlerSubmitAtaque} value='Ascendente'>Ascendente</button>
                    <button onClick={handlerSubmitAtaque} value='Decendente'>Decendente</button>
                    </div>
                </div>
                <div className={style.Cards}>               
                {pokemones
                .slice((Pagina-1)*porPagina, (Pagina-1)*porPagina+porPagina)
                .map((pokemon) => {
                    return (
                        <Card
                            key={pokemon.id} 
                            id={pokemon.id}
                            type={pokemon.type}
                            name={pokemon.name}
                            image={pokemon.image}
                        />
                    )
                })}
                </div>
                </div>
                <div className={style.paginacion}> 
                <Paginacion Pagina={Pagina} setPagina={setPagina} maximo={maximo}/>
                </div>
                </div>
            ):(
                <div className={style.card}>
                    <div className={style.izquierda}>
                        <button onClick={recargar} value='todos'>Atras</button>
                    </div>
                    <div className={style.derecha}>
                    {pokemones.length === 0?(
                        <div className={style.loading}>
                        </div>
                    ):(  
                        <Card 
                            key={pokemones.id}
                            id={pokemones.id}
                            type={pokemones.type}
                            name={pokemones.name}
                            image={pokemones.image}
                    />
                    )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cards;