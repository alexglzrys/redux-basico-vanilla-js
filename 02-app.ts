// Acciones
interface Action {
    type: string;
    payload?: any;
}

// Reducer
function reducer(state = 10, action: Action) {
    // Un reducer debe realizar la tarea con los datos de entrada recibidos, esta prohibido hacer llamadas a funciones externas o llamadas http
    switch (action.type) {
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state *= action.payload;
        case 'DIVIDIR':
            return state /= action.payload;
        default:
            // Los reducer siempre retornan el estado actual si no existe la acción solicitada
            return state;
    }

   
}


// Usar el reducer - accion será incrementar
const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};
console.log(reducer(10, incrementadorAction));

// Usar el reducer - accion será decrementar
const decrementarAction: Action = {
    type: 'DECREMENTAR'
}
console.log(reducer(10, decrementarAction));

// Usar el reducer - accion será multiplicar el estado por el valor enviado en la carga util de la acción
const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
}
console.log(reducer(10, multiplicarAction));

// Usar el reducer - accion será dividir 
const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 5
}
console.log(reducer(20, dividirAction));