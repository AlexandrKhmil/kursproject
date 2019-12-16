import React from "react"; 
import { NavLink } from 'react-router-dom'; 
import { Product, PriceBlock } from './style'; 

export default class ProductItem extends React.Component {  
    constructor(props) {
        super(props);
    }

    render() {  
        return (  
            <>
                <Product>
                    <img src={this.props.img} alt="Product Image" />
                    <NavLink to="/">{this.props.name}</NavLink>
                    <PriceBlock className="priceBlock">
                        <span>{this.props.price}</span>
                    </PriceBlock> 
                    <button>Add to cart</button>
                </Product>
            </>
        );
    }
} 