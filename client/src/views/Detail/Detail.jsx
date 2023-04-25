import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail } from "../../redux/actions";
import { Link, useParams } from "react-router-dom";
import style from "./Detail.module.css";
import psyduck from '../../images/Detail/psiduck.png'
import pokemonLogo from '../../images/Detail/pokemon logo.png'
import pokeball from '../../images/Detail/pokeball.png'

const Detail = () => {
    const dispatch = useDispatch();
    const { pokemonesDetail } = useSelector((state) => state);
    const { id } = useParams();

    React.useEffect (()=>{
        dispatch(getPokemonDetail(id));
    }, [id,dispatch]);

    return (
        <div className={style.home}>
            {pokemonesDetail.name? (
                <div>
                    <img src={psyduck} className={style.psyduck} alt='psyduck'/>
                    <img src={pokemonLogo} className={style.pokemonlogo} alt='pokemon Logo'/>
                    <img src={pokeball} className={style.pokeball} alt='pokeball'/>
                    <div className={style.boton}>
                    <Link to='/home' className={style.atras}>
                    <p>Atras</p>
                    </Link>
                    </div>
                    <div className={style.detail}>
                        <div className={style.arriba}>
                            <img src={pokemonesDetail.image} alt={pokemonesDetail.name} className={style.image}/>
                        </div>
                        <div className={style.barra2}></div>
                        <div className={style.barra}>
                        <div className={style.poke}></div>
                        </div>
                        
                        <p className={style.nombre}>{pokemonesDetail.name}</p>
                        <div className={style.data}>
                            <p>{pokemonesDetail.id}</p>
                            <p>Vida: {pokemonesDetail.vida}</p>
                            <p>Ataque: {pokemonesDetail.ataque}</p>
                            <p>Defensa: {pokemonesDetail.defensa}</p>
                            <p>Altura: {pokemonesDetail.altura}</p>
                            <p>Peso: {pokemonesDetail.peso}</p>
                            <div className={style.tipos}>
                                <p>Tipo:</p>
                                {pokemonesDetail.type.map((type)=>{
                                        return <p>{type}</p>
                                    }
                                )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            ):(
                <div className={style.loading}>
                    <img src={pokemonLogo} className={style.pokemonlogoloading} alt='pokemon Logo'/>
                </div>
            )}
        </div>
    )
}

export default Detail;