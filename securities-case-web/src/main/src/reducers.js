import {combineReducers} from  'redux';

import productReducer from './product/product_reducer';

const allReducers = combineReducers({
    products: productReducer
});

export default allReducers;