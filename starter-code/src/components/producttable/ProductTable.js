import React, { Component } from 'react';
import ProductRow from '../productrow/ProductRow.js';
import './ProductTable.css';

class ProductTable extends Component {

    showAllTheProducts = ()=>{
        return this.props.theProducts.map((eachProduct, i)=>{
            return <ProductRow key={i}
                productName= {eachProduct.name}
                productPrice = {eachProduct.price}
                isAvailable = {eachProduct.stocked}/>
        })
    }


    render() {
        return (
            <div className="product-table">
                {this.showAllTheProducts()}
            </div>
        )
    }
}

export default ProductTable;
