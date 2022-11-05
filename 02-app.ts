// Acciones

interface Action {
    type: string;
    payload?: any;
}

// Reducer

function reducer(state = 10, action: Action) {
    if (action.type === 'INCREMENTAR') {
        return state += 1;
    }

    // Los reducer siempre retornan un estado
    return state;
}


// Usar el reducer
const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};
console.log(reducer(10, incrementadorAction));