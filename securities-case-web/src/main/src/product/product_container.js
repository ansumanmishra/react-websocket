import {connect} from 'react-redux';
import {getProducts, getUpdatedPrice} from './product_actions';

import ListProducts from './listproducts_component';

const mapStateToProps = (state) => {
    return {
        products: state.products
    };
}

const mapDispatch = {getProducts, getUpdatedPrice};

export default connect(mapStateToProps, mapDispatch)(ListProducts);