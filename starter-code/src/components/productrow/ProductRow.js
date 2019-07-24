import React, { Component } from 'react';
import './ProductRow.css';

class ProductRow extends Component {
    render() {

        return (
            <div className='product'>
                <div className={`product-name ${!this.props.isAvailable && 'unavailable' }`}>
                    {this.props.productName}                    
                </div>
                <div className="product-price">
                    {this.props.productPrice}
                </div>
            </div>
        )
    }
}

export default ProductRow;
