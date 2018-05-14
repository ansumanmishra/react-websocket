import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ProductDetails from './productDetails';

import './product.css';

class ListProducts extends React.Component {
    componentWillMount() {
        this.props.getProducts();
    }
    componentDidMount() {
        this.props.getUpdatedPrice();
    }
    displayProducts() {
        let productsList = this.props.products;
        
        if(!productsList) {
            return;
        }

        return productsList.map( (productList, index) => {
            return <ProductDetails key={productList.code} code={productList.code} price={productList.price.amount} />
        });
    }
    render() {
        return(
            <div className="product-container">
                <div className="product-container__header">
                    <strong>Products</strong>
                    <span className="product-container__header-price"><strong>Price</strong></span>
                </div>   
                <ul className="product-container__list">
                    <ReactCSSTransitionGroup
                      transitionName="product"
                      transitionEnterTimeout={500}
                      transitionLeaveTimeout={300}>
                      {this.displayProducts()}
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        );
    }
}

export default ListProducts;