import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import navigation from './navigation';
const myReducers = combineReducers({
    products,
    cart,
    navigation
});

export default myReducers;