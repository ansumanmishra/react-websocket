import React from 'react';

class productDetails extends React.Component {
	constructor() {
		super();
		this.priceChanged = false;
	}
    componentWillReceiveProps(newProps) {
	    if(this.props.price !== newProps.price) {
	        this.priceChanged = true;
	    }
	}
	
	componentDidUpdate() {
	    setTimeout( () => {
	    	this.priceChanged = false;
	    }, 500);
	}

	render() {
		return(
				<li key={this.props.code}>
					<div className="product-container__list-item-link">{this.props.code} 
						<span className={this.priceChanged ? 'product-container__list-item-price--changed' : 'product-container__list-item-price'}>{this.props.price}</span>
					</div>
				</li>
			);
	}
}

export default productDetails;



