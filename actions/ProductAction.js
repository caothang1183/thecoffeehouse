import * as types from '../constants/ACTION_TYPES';

export function findAll() {
    quantity = 1;
    return {
        type: types.product.FIND_ALL,
        params: null
    }
}

export function FindById({ id }) {
    return {
        type: types.product.FIND_BY_ID,
        params: { id }
    }
}
