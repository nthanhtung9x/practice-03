import * as types from './../constants/actionTypes';

var initialState = 10;

var myReducer = (state = initialState, action ) => {
    switch(action.type) {
        case types.CHANGE_NAVIGATION:
            if(action.countItem === -10){
                state = 10;
            }
            else {
                state += action.countItem;
            }
            return state;
        default:
            return state;
    }
}

export default myReducer;