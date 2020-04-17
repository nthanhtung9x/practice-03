import * as types from '../constants/actionTypes';

var initialState = [];

var myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_TO_CART:{
            let index = -1;
            if(state.length > 0) {
                for(let i = 0; i < state.length; i++) {
                    if(state[i].id === action.item.id){
                        index = i;
                        break;
                    }
                }
            }
            if(index !== -1){
                if(action.item.quanlity <= state[index].count){
                    return [...state];
                }
                else{
                    state[index].count += 1;
                }
            } else {
                action.item.count = 1;
                state.push(action.item);
            }
            return [...state];
        }
        case types.UPDATE_COUNT:{
            let index = -1;
            if(state.length > 0) {
                for(let i = 0; i < state.length; i++){
                    if(state[i].id === action.item.id){
                        index = i;
                        break;
                    }
                }
            }
            if(index !== -1){
                state[index].count += action.count;
                if(state[index].count === 0){
                    state.splice(index,1);
                }
            } 
            return [...state];
        }
        case types.DONE__PURCHASE:{
            let result = [];
            state = result;
            return [...state];
        }
        default:
            return state;
    }
}

export default myReducer;