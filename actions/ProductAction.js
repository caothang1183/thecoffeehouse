import * as types from '../constants/ACTION_TYPES';

export function initProduct() {
    return {
        type: types.INIT_PRODUCT,
        params: null
    }
}

export function findById({ id }) {
    return {
        type: types.FIND_BY_ID,
        params: { id }
    }
}
