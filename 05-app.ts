import { Store, createStore } from 'redux';
import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.actions';

// Usar la librería de redux para vanilla JS
const store: Store = createStore(contadorReducer);

// Si el valor del estado cambia, el store nos notifica a través de una subscripción
store.subscribe(() => console.log('Subscribe', store.getState()));

store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);