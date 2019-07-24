import React, { Component } from 'react'
import SearchBar from '../searchbar/SearchBar.js';
import ProductTable from '../producttable/ProductTable.js';

class FilterableProductTable extends Component {
    state ={
        allProduct: this.props.products.data,
        visibleProducts: this.props.products.data,
        searchTerm: '',
        isChecked: false,
    }

    filterProduct = (e) =>{
        let clone = [...this.state.allProduct];
        let searchValue = e.target.value;

        let filteredList = clone.filter((eachProduct) =>{
            return eachProduct.name.toUpperCase().includes(searchValue.toUpperCase());
        })


        console.log(filteredList);
        this.setState({visibleProducts: filteredList, searchTerm: searchValue});
        // console.log(this.state.searchTerm);
    }

    inStock = ()=>{
        let clone = [...this.state.visibleProducts];
        let filteredList = [];
        let theCheckMark = this.state.isChecked;
        this.filterProduct;
        if(!this.state.isChecked){
            filteredList = clone.filter((eachProduct) =>{
                return eachProduct.stocked;
            })
            theCheckMark = true;
            this.setState({visibleProducts: filteredList, isChecked: theCheckMark});
        }
        else{
            filteredList = clone.filter((eachProduct) =>{
                return eachProduct.name.toUpperCase().includes(this.state.searchTerm.toUpperCase());
            })
            theCheckMark = false;
            this.setState({visibleProducts: [...this.state.allProduct], isChecked: theCheckMark});
        }
        console.log(theCheckMark);
    }


   
    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar theFilter = {this.filterProduct}/>
                {/* <input type="checkbox" onChange={this.inStock} checked={`{this.state.isChecked ? checked : ''}`}/>  Only show Products in stock */}

                {!this.state.isChecked && <input
              onChange = {this.inStock}
              name = "isChecked"
                type="checkbox"
                />}

              {this.state.isChecked && <input
              onChange = {this.inStock}
              name = "isChecked"
                type="checkbox"
                checked
                />}
                    Only show Products in stock
                <ProductTable theProducts = {this.state.visibleProducts} />
            </div>
        )
    }
}

export default FilterableProductTable;

