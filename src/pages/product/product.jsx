import React from "react";    

import { Container } from './../../components/container'; 
import FactsBlock from './../../components/factsBlock/factsBlock';
import Breadcumb from './../../components/breadcumb/breadcumb';

import { ProductPageContainer, Product, LeftBlock, RightBlock, ParametersList, PriceBlock } from './style';

import { firestoreProducts } from './../../firebase/firebase';  

const listOfKeyExceptions = ['id', 'name', 'category', 'img', 'description', 'price'];

export default class ProductPage extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            product : { }, 
            breadcumbItems : [ 
                { title : 'Catalog', link : '/catalog' },
                { title : 'Название продукта' }, 
            ], 
            productNotFound : false,
            isFetched : false
        }
    } 

    async componentDidMount() {  
        let loadedProducts = await firestoreProducts; 
        let selectedProduct = loadedProducts.find(item => item.id === this.props.match.params.productID);
        if (selectedProduct != null) {
            this.state.breadcumbItems.pop();
            this.setState({ product : selectedProduct,
                breadcumbItems : [...this.state.breadcumbItems, { title : selectedProduct.name }],
                isFetched : true });  
        } else {
            this.setState({ productNotFound : true, isFetched : true });
        }  
    }


    render() {
        return (
            <>   
                <ProductPageContainer>
                    <Breadcumb items={this.state.breadcumbItems} /> 
                    {
                        this.state.isFetched ?
                        !this.state.productNotFound ? 
                        <Product>
                            <LeftBlock>
                                <img src={this.state.product.img} alt="Product" />
                            </LeftBlock>
                            <RightBlock>
                                <h1>{this.state.product.name}</h1>
                                <ParametersList>
                                {
                                    Object.entries(this.state.product).map((item, key) => 
                                    listOfKeyExceptions.indexOf(item[0]) === -1 ?
                                    <li key={key}><span>{item[0]}:</span> <span>{item[1]}</span></li>
                                    : null  
                                    )
                                } 
                                </ParametersList> 
                                <p>{this.state.product.description}</p>
                                <PriceBlock>
                                    <span>${this.state.product.price}</span>
                                </PriceBlock>
                                <button>Add to cart</button>
                            </RightBlock> 
                        </Product> 
                        :
                        <h2>Данный товар не найден</h2> 
                        :
                        <p>Красивый прелоадер</p>
                    } 
                </ProductPageContainer>  
                <FactsBlock />
            </>
        );
    }  
}   