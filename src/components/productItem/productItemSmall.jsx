import React from "react"; 
import { NavLink } from 'react-router-dom'; 
import { ProductSmall, PriceBlock } from './style'; 

export default class ProductItemSmall extends React.Component {  
    constructor(props) {
        super(props);
    }

    render() {  
        return (  
            <>
                <ProductSmall>
                    <img src={this.props.img} alt="Product Image" />
                    <NavLink to={`/product/${this.props.id}`}>{this.props.name}</NavLink>
                    <PriceBlock className="priceBlock">
                        <span>{this.props.price}</span>
                    </PriceBlock> 
                    <button>Add to cart</button>
                </ProductSmall>
            </>
        );
    }
} 