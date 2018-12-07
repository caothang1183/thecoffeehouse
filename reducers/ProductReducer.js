import * as types from '../constants/ACTION_TYPES';
import callApi from '../utils/apiCaller';

export default function ProductReducer(state = [], action = {}) {
    switch (action.type) {
        case types.product.FIND_ALL:
            // callApi('products', null, null)
            //     .then(response => {
            //         console.log(response);
            //         return response;
            //     })

        case types.product.FIND_BY_ID:
            return state;

        default:
            return state;
    }
}

// function find(items, id) {
//     return items.findIndex((item) => item.id === id)
// }