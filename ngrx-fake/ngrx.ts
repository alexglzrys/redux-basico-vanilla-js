export interface Action {
    type: string;
    payload?: any;
}

export interface Reducer<T> {
    // Una función que recibe un state (genérico) y una action. La cual devuelve un nuevo state de tipo genérico
    (state: T, action: Action): T
}