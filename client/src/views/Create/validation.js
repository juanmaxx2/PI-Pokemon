export const validationName = (pokemon, error, setError) => {
    if (!pokemon.name) setError('Complete este campo')
    else {
        if(!isNaN(pokemon.name))setError('No puede ser un numero');
        else{
            if (!/^[a-zA-Z0-9]+$/.test(pokemon.name))setError('No puede contener caracteres especiales');
            else setError('');
        }
    }
};

export const validationImage = (pokemon, error, setError) => {
    if (!pokemon.image) setError('Complete este campo');
    else {
        if(!isNaN(pokemon.image))setError('No puede ser un numero');
        else{
            if (!/^[a-zA-Z0-9_.\-/]+$/.test(pokemon.image))setError('No puede contener caracteres especiales');
            else setError('');
        }
    }
};

export const validationVida = (pokemon, error, setError) => {
    if (!pokemon.vida) setError('Complete este campo')
    else {
        if(isNaN(pokemon.vida))setError('Debe contener unicamente numeros');
        else setError('');
    }
};

export const validationAtaque = (pokemon, error, setError) => { 
    if (!pokemon.ataque) setError('Complete este campo')
    else {
        if(isNaN(pokemon.ataque))setError('Debe contener unicamente numeros');
        else setError('');
    }
};

export const validationDefensa = (pokemon, error, setError) => {
    if (!pokemon.defensa) setError('Complete este campo')
    else {
        if(isNaN(pokemon.defensa))setError('Debe contener unicamente numeros');
        else setError('');
    }
};

export const validationVelocidad = (pokemon, error, setError) => {
    if(isNaN(pokemon.velocidad))setError('Debe contener unicamente numeros');
    else setError('');
};

export const validationAltura = (pokemon, error, setError) => {
    if(isNaN(pokemon.altura))setError('Debe contener unicamente numeros');
    else setError('');
};

export const validationPeso = (pokemon, error, setError) => {
    if(isNaN(pokemon.peso))setError('Debe contener unicamente numeros');
    else setError('');
};

export const validationType = (pokemon, error, setError) => {
    console.log()
    if (!pokemon.type) setError('Complete este campo')
    else setError('') 
};


