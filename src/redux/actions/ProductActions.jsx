import {ActionTypes} from '../constants/ActionTypes'; 
expost const setProduct = (products) => {
    return {
        type:ActionType.SET_PRODUCTS,
        payload:products
    };
};

export const selectedProduct = (product) => {
    return {
        type:ActionType.SELECTED_PRODUCT,
        payload:product
    }
};