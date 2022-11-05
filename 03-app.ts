import { decrementarAction, dividirAction, incrementadorAction, multiplicarAction, resetAction } from "./contador/contador.actions";
import { Action } from "./ngrx-fake/ngrx";

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
        case 'RESET':
            return state = 0;
        default:
            // Los reducer siempre retornan el estado actual si no existe la acción solicitada
            return state;
    }
}

console.log(reducer(10, incrementadorAction));
console.log(reducer(10, decrementarAction));
console.log(reducer(10, multiplicarAction));
console.log(reducer(10, dividirAction));
console.log(reducer(10, resetAction));