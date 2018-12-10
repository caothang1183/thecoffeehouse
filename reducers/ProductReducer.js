import * as types from '../constants/ACTION_TYPES';
import axiosCaller from '../utils/axiosCaller';

export default function ProductReducer(state = [], action = {}) {
    switch (action.type) {
        case types.INIT_PRODUCT:
            axiosCaller('products', 'GET', null)
                .then(responseJson => { return responseJson });

        case types.FIND_BY_ID:
            return state;

        default:
            return state;
    }
}


// function find(items, id) {
//     return items.findIndex((item) => item.id === id)
// }