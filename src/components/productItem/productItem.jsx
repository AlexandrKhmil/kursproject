import React from "react"; 
import { Container } from './../../components/container';  
import { Product } from './style'; 

export default class ProductItem extends React.Component {  
    constructor(props) {
        super(props);
    }

    render() {  
        return (  
            <>
                <Product>
                    <img src={this.props.img} alt="Product Image" />
                    <h4>{this.props.name}</h4>
                    <div>{this.props.price}</div>
                    <button>Add to cart</button>
                </Product>
            </>
        );
    }
} 