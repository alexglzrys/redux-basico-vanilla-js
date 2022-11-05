import { Action } from "../ngrx-fake/ngrx";

// Reducer
export function contadorReducer(state = 10, action: Action) {
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