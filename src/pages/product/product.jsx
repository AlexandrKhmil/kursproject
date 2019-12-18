import React from "react";    

import { Container } from './../../components/container'; 
import FactsBlock from './../../components/factsBlock/factsBlock';
import Breadcumb from './../../components/breadcumb/breadcumb';

import { ProductPageContainer, Product, LeftBlock, RightBlock, ParametersList, PriceBlock } from './style';

import { firestoreProducts } from './../../firebase/firebase';  

const listOfKeyExceptions = ['id', 'name', 'category', 'img', 'description', 'price'];

const breadcumbItems = [{ title : 'Catalog', link : '/catalog' }];

export default class ProductPage extends React.Component { 

    render() {
        const { products, isReady, addToCart } = this.props; 
        return (
            <>   
                <ProductPageContainer>
                { !isReady 
                    ? <p>Идет загрузка</p>
                    : [products.find(item => item.id === this.props.match.params.productID)].map((product, key) =>
                <div key={key}>
                    <Breadcumb items={ [...breadcumbItems, { title : product.name}]} />  
                    <Product>
                        <LeftBlock>
                            <img src={product.img} alt="Product" />
                        </LeftBlock>
                        <RightBlock>
                            <h1>{product.name}</h1>
                            <ParametersList>
                            {
                                Object.entries(product).map((item, key) => 
                                listOfKeyExceptions.indexOf(item[0]) === -1 
                                ? <li key={key}><span>{item[0]}:</span> <span>{item[1]}</span></li>
                                : null  
                                )
                            } 
                            </ParametersList> 
                            <p>{product.description}</p>
                            <PriceBlock>
                                <span>${product.price}</span>
                            </PriceBlock>
                            <button onClick={ () => addToCart(product.id) }>Add to cart</button>
                        </RightBlock> 
                    </Product> 
                </div>
                    ) 
                } 
                </ProductPageContainer>  
                
                <FactsBlock />
            </>
        );
    }  
}   