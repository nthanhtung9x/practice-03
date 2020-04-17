import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
const myReducers = combineReducers({
    products,
    cart
});

export default myReducers;