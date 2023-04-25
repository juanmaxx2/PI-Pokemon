import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import grookey from '../../images/Landing/grookey.png';
import pokemonImage from '../../images/Landing/pokemon logo.png';
import pokeball from '../../images/Landing/pokeball.png';

const Landing = () => {
    return (
        <div className={style.Container} >
            <img src={pokeball} alt='pokeball' className={style.pokeball}/>
            <img src={pokemonImage} alt='pokemonLogo' className={style.pokemonImage}/>
            <img src={grookey} alt='Grokey' className={style.Grookey}/>
            <Link to='/home' className={style.Home}>
            <p className={style.Boton}>INGRESAR</p>
            </Link>
        </div>
    )
}

export default Landing;