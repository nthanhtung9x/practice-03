import * as types from "../constants/actionTypes";


var inititalState = [];

var myReducer = (state = inititalState, action) => {
    switch(action.type) {
        case types.LIST_ALL:{
            state = action.list['products'];
            return [...state];
        }
        case types.DONE__PURCHASE:{
            let result = state.slice();
            for(let i = 0; i < result.length; i++){
                for(let j = 0; j < action.cart.length; j++) {
                    if(result[i].id === action.cart[j].id) {
                        result[i].quanlity -= action.cart[j].count;
                        result[i].count = 0;
                    }
                }
            }
            state = result;
            return [...state];
        }
        default:
            return [...state];
    }
};

export default myReducer;