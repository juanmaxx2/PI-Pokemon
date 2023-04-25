import style from "./Paginacion.module.css";

const Paginacion = ({Pagina, setPagina, maximo}) => {

    const nextPage = () => {
        setPagina(Pagina + 1);
    }

    const previusPage = () => {
        setPagina(Pagina - 1);
    }

    const pageNumbers = Array.from({ length: maximo }, (_, i) => i + 1);

    return (
        <div className={style.Paginacion}>
            <button disabled={Pagina === 1 || Pagina < 1}  onClick={previusPage} className={style.boton}>➤</button>
            {pageNumbers.map((pageNumber) => (
                <button key={pageNumber} onClick={() => setPagina(pageNumber)}>
                    {pageNumber}
                </button>
            ))}
            <button disabled={Pagina === maximo} onClick={nextPage}>➤</button>
        </div>
    )
}

export default Paginacion;