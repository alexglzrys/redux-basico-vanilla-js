import { contadorReducer } from "./contador/contador.reducer";
import { Action, Reducer } from "./ngrx-fake/ngrx";
import { decrementarAction, incrementadorAction, multiplicarAction } from './contador/contador.actions';

class Store<T> {
    constructor(private reducer: Reducer<T>, 
                private state: T) { }
    
    // permite consultar el estado actual
    getState() {
        return this.state;
    }

    // permite modificar el estado
    dispatch(action: Action) {
        this.state = this.reducer(this.state, action)
    }
}

// Crear el store a partir del estado inicial y el reducer con las acciones para modificarlo
const store = new Store(contadorReducer, 10);

//console.log(store.getState());

store.dispatch(incrementadorAction);
console.log(store.getState());

store.dispatch(decrementarAction);
console.log(store.getState());

store.dispatch(multiplicarAction);
console.log(store.getState());