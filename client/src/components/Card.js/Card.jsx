import { Link } from "react-router-dom"
import style from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={style.Card}>
            <Link to={`/detail/${props.id}`} className={style.nombreLink}>
                <p className={style.nombre}>{props.name}</p>
            </Link>
            <div className={style.tipos}>
            <p>Tipos:</p>
            {props.type?.map((type)=>{
                return <p >{type}</p>
            })
            }
            </div>
            
            <img src={props.image} alt={props.name}/>
        </div>
    )
}

export default Card