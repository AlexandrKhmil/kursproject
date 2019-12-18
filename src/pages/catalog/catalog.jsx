import React from "react";  

import { ProductList } from './../../components/list';
//import ProductItemSmall from '../../components/productItem/productItemSmall';
import ProductItemSmall from '../../containers/ProductItemSmall';

import FactsBlock from './../../components/factsBlock/factsBlock';
import Breadcumb from './../../components/breadcumb/breadcumb';

import { AsideBlock, AsideItem, AsideList } from './aside';
import { CatalogContainer, MainBlock } from './style';
  
import { firestoreProducts } from './../../firebase/firebase'; 

const breadcumbItems = [ 
    { title : 'Catalog', link : '/catalog' },
    { title : 'All' }, 
];

export default class CatalogPage extends React.Component {   
    render() {  
        const { products, isReady } = this.props;
        return ( 
            <>   
                <CatalogContainer>
                    <Breadcumb items={breadcumbItems} />

                    <MainBlock>
                        <ProductList>
                        {
                            !isReady 
                            ? <p>Загрузка...</p>
                            : products.map((item, key) => 
                            <ProductItemSmall key   = { key }
                                              id    = { item.id }
                                              name  = { item.name } 
                                              price = { item.price }  
                                              img   = { item.img } 
                            />)
                        }
                        </ProductList>

                        <AsideBlock>
                            <AsideItem>
                                <h3>Category</h3>
                                <AsideList>
                                {
                                    !isReady 
                                    ? <p>Загрузка...</p>
                                    : products.reduce((prev, product, index) => {
                                        return (prev.indexOf(product.category) == -1) ? [ ...prev, product.category] : prev
                                    }, []).map((item, key) => 
                                    <li key={key}><button>{item}</button></li>
                                    )
                                } 
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
 