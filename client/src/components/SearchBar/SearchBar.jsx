import style from "./SearchBar.module.css";

const SearchBar = ({ handlerChange, handlerSubmit}) => {
    return (
        <div className={style.SearchBar}>
        <form onChange={handlerChange} >
            <div>
                <input type='search' placeholder="Ingrese el nombre de un Pokemon a buscar"/>
                <button onClick = {handlerSubmit}>Buscar</button>
            </div>
        </form>
        </div>
    )
}

export default SearchBar;