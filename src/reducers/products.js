const initialState = [];

export function products(state = initialState, action) {
     if (action.type === 'RECEIVE_PROD') {
        return action.products;
    }
    return state;
}

export function filterTracks(state = "", action) {
    if (action.type === 'INPUT_VALUE') {
        return action.inputValue;
    }
    return state;
}