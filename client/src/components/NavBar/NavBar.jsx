import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import pokemonLogo from "../../images/Pagina principal/pokemonlogo.png"


const NavBar = () => {
    return (
        <div className={style.NavBar}>
            <img src={pokemonLogo} alt="Pokemon Logo" className={style.pokemonLogo}/>
            <Link to='/home' className={style.home}>HOME</Link>
            <Link to='/create' className={style.create}>CREATE</Link>
        </div>
    )
}

export default NavBar;