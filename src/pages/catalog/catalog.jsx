import React from "react";  

import { ProductList } from './../../components/list';
import ProductItemSmall from '../../components/productItem/productItemSmall';
import FactsBlock from './../../components/factsBlock/factsBlock';

import { BreadcrumbBlock, Breadcrumb } from './breadcrumb';
import { AsideBlock, AsideItem, AsideList } from './aside';
import { CatalogContainer, MainBlock } from './style';

export default class CatalogPage extends React.Component {    
    render() {  
        return ( 
            <>  
                <CatalogContainer>
                    <BreadcrumbBlock>
                        <Breadcrumb>
                            <li><button>Catalog</button></li>
                            <li>All</li>
                        </Breadcrumb>
                    </BreadcrumbBlock> 

                    <MainBlock>
                        <ProductList>
                            <ProductItemSmall 
                                            name="name" 
                                            price="price"  
                                            img="static/jpg/Rectangle_5_copy.jpg" />
                            <ProductItemSmall 
                                            name="name" 
                                            price="price"  
                                            img="static/jpg/Rectangle_5_copy.jpg" />
                            <ProductItemSmall 
                                            name="name" 
                                            price="price"  
                                            img="static/jpg/Rectangle_5_copy.jpg" />
                            <ProductItemSmall 
                                            name="name" 
                                            price="price"  
                                            img="static/jpg/Rectangle_5_copy.jpg" />
                        </ProductList>

                        <AsideBlock>
                            <AsideItem>
                                <h3>Category</h3>
                                <AsideList>
                                    <li><button>Smart Phone</button></li>
                                    <li><button>Laptop</button></li>
                                </AsideList>
                            </AsideItem>
                        </AsideBlock>
                    </MainBlock>  
                </CatalogContainer>

                <FactsBlock />
            </>
        );
    }
} 