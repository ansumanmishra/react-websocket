const productReducer = (state=[], action) => {
    switch (action.type) {
        case "RESOLVED_GET_PRODUCTS":
            /* eslint no-unreachable: 0 */
            return action.data;
        break
        
        case "RESOLVED_GET_UPDATED_PRICE":
        	return state.map( item => (item.code === action.data.code && item.price.when !== action.data.price.when) ? action.data : item );
        break;
        
        default:
        break;
    }
    return state;
};

export default productReducer;