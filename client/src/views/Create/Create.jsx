import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createPokemon, getTypes } from "../../redux/actions";
import { validationName, validationImage, validationVida, validationAtaque ,validationDefensa, validationVelocidad, validationAltura, validationPeso,validationType } from "./validation";
import style from "./Create.module.css";
import { Link } from "react-router-dom";
import pokemonLogo from '../../images/Create/pokemonlogo.png'
import pokeball from '../../images/Create/pokeball.png'


const Create = () => {
    const dispatch = useDispatch()
    const types = useSelector((state) => state.types);

    const [newPokemon, setNewPokemon] = useState({
        name:'',
        image:'',
        vida:'',
        ataque:'',
        defensa:'',
        velocidad:'',
        altura:'',
        peso:'',
        type:[],
    })

    const [status, setStatus] = useState('Completar los campos');
    const [name, setName] = useState('Complete este campo');
    const [image, setImage] = useState('Complete este campo');
    const [vida, setVida] = useState('Complete este campo');
    const [ataque, setAtaque] = useState('Complete este campo');
    const [defensa, setDefensa] = useState('Complete este campo');
    const [velocidad, setVelocidad] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [type, setType] = useState('');

    useEffect (()=>{
        dispatch(getTypes())
    },[dispatch])

    const onChange = (event) =>{
        console.log(event.target.value)
        if (event.target.name === 'types'){
            setNewPokemon({ ...newPokemon, type:[...newPokemon.type,event.target.value]})
        }
        console.log(newPokemon.type)
    }

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setNewPokemon({...newPokemon, [property]:value});
        validationName({...newPokemon, [property]:value}, name,setName);
        validationImage({...newPokemon, [property]:value}, image,setImage);
        validationVida({...newPokemon, [property]:value}, vida,setVida);
        validationAtaque({...newPokemon, [property]:value}, ataque,setAtaque);
        validationDefensa({...newPokemon, [property]:value}, defensa,setDefensa);
        validationVelocidad({...newPokemon, [property]:value}, velocidad,setVelocidad);
        validationAltura({...newPokemon, [property]:value}, altura,setAltura);
        validationPeso({...newPokemon, [property]:value}, peso,setPeso);
        validationType({...newPokemon, [property]:value}, type,setType);
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if(newPokemon.name && newPokemon.image && newPokemon.vida && newPokemon.ataque && newPokemon.defensa && newPokemon.type){
            dispatch(createPokemon(newPokemon));
            setStatus('Se creo correctamente');
        }
        else {
            setStatus('Datos incorrectos')
        }
    }

    const crearNuevoPokemon = () => {
        setNewPokemon({name:'', image:'', vida:'', ataque:'', defensa:'', velocidad:'', altura:'', peso:'', type:'',});
        setStatus('');
    };

    return (
        <div className={style.Create}>
            <img src={pokeball} alt="pokeball" className={style.pokeball}/>
            <img src={pokemonLogo} alt="Pokemon Logo" className={style.pokemonLogo}/>
            <Link to='/home' className={style.atras}>Atras</Link>
            
            <form onSubmit={submitHandler}>
            <p>Crear Pokemon</p>
                <div>
                    <input type='text' value={newPokemon.name} onChange={changeHandler} name='name' placeholder="Nombre"/>
                    <p>{name}</p>
                </div>
                <div>
                    <input type='text' value={newPokemon.image} onChange={changeHandler} name='image' placeholder="imagen"/>
                    <p>{image}</p>
                </div>
                <div>
                    <input type='text' value={newPokemon.vida} onChange={changeHandler} name='vida' placeholder="vida"/>
                    <p>{vida}</p>
                </div>
                <div>
                    <input type='text' value={newPokemon.ataque} onChange={changeHandler} name='ataque' placeholder="ataque"/>
                    <p>{ataque}</p>
                </div>
                <div>
                    <input type='text' value={newPokemon.defensa} onChange={changeHandler} name='defensa' placeholder="defensa"/>
                    <p>{defensa}</p>
                </div>
                <div>
                    <input type='text' value={newPokemon.velocidad} onChange={changeHandler} name='velocidad' placeholder="velocidad"/>
                    <p>{velocidad}</p>
                </div>
                <div>
                    <input type='text' value={newPokemon.altura} onChange={changeHandler} name='altura' placeholder="altura"/>
                    <p>{altura}</p>
                </div>
                <div>
                    <input type='text' value={newPokemon.peso} onChange={changeHandler} name='peso' placeholder="peso"/>
                    <p>{peso}</p>
                </div>

                <select onChange={onChange} name='types'>
                    {types.map((type) => {
                        return (
                        <option key={type.id} value={type.name}> {type.name} </option>
                        )
                    })}
                </select>

                <div >
                    {newPokemon.type?.map((t)=>{
                        return (
                            <p>{t}</p>
                        )
                    })}
                </div>

                <p className="status">{status}</p>
                <div className={style.botones} >
                <button type='submit'>SUBMIT</button>
                <button type='button' onClick={crearNuevoPokemon} >Agregar otro Pokemon</button>
                </div>
            </form>
        </div>
    )
}

export default Create;