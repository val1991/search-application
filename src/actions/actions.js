import fetch from 'cross-fetch';

function receiveProducts(json) {
    return {
        type: 'RECEIVE_PROD',
        products: json
    }
}

function fetchProducts() {
    return dispatch => {
        return fetch('https://demo9627463.mockable.io')
            .then(response => response.json())
            .then(json => dispatch(receiveProducts(json.products)))
    }
}

export function getProducts() {
    return (dispatch) => {
            return dispatch(fetchProducts())
    }
}

