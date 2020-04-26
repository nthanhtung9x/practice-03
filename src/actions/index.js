import * as types from '../constants/actionTypes';
import callApi from '../utils/apiCaller';

export const getApiProducts = () => {
    return (dispatch) => {
        return callApi('products','GET',null).then(res => {
            dispatch(listAll(res.data));
        });
    }
}

export const listAll = (list) => {
    return {
        type : types.LIST_ALL,
        list
    }
};

export const addToCart = (item) => {
    return {
        type: types.ADD_TO_CART,
        item
    }
}

export const updateCount = (item,count) => {
    return {
        type: types.UPDATE_COUNT,
        item,
        count
    }
}

export const donePurchase = (cart) => {
    return {
        type:types.DONE__PURCHASE,
        cart
    }
}

export const changeNavition = (countItem) => {
    return {
        type:types.CHANGE_NAVIGATION,
        countItem
    }
}