import { Action } from "../ngrx-fake/ngrx";

// Definir todas las acciones compatibles con el contador
export const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};

export const decrementarAction: Action = {
    type: 'DECREMENTAR'
}

export const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
}

export const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 5
}

export const resetAction: Action = {
    type: 'RESET',
}