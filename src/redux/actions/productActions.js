import {ActionTypes} from "../constants/action-types"
export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products,
    }
}

export const selectProduct = (product) => {
    return {
        type: SELECTED_PRODUCT,
        payload: product
    }
}