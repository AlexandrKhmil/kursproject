import React from "react"; 

import SliderBanner from './../../components/sliderBanner/sliderBanner';
import ProductBlockSlider from './../../components/productBlockSlider/productBlockSlider';
import FactsBlock from './../../components/factsBlock/factsBlock';
import { Container } from './../../components/container';  

import { StockBannerRow, DiscountPriceBlock, OldPrice, NewPrice, StockBannerInner } from './stockBlock';
import { SubscribeRow, SubscribeForm } from './subscribeBlock'; 

import { SliderBannerBlock } from './style';
 
import { firestoreProducts } from './../../firebase/firebase'; 

export default class HomePage extends React.Component {  
    constructor(props) {
        super(props);
        this.state = { 
            products : [
                { name  : 'СЛайд2', img : 'static/jpg/Rectangle_5_copy.jpg', price : '$8000' },
                { name  : 'Smart Phone  Primo V1', img : 'static/jpg/Rectangle_5_copy.jpg', price : '$8000' }, 
                { name  : 'Smart Phone  Primo V1', img : 'static/jpg/Rectangle_5_copy.jpg', price : '$8000' }
            ],
            products1 : [
                { name  : 'Слайд1', img : 'static/jpg/Rectangle_5_copy.jpg', price : '$8000' },
                { name  : 'Smart Phone  Primo V1', img : 'static/jpg/Rectangle_5_copy.jpg', price : '$8000' }, 
                { name  : 'Smart Phone  Primo V1', img : 'static/jpg/Rectangle_5_copy.jpg', price : '$8000' }
            ],
            products2 : [
                { name  : 'Слайд3', img : 'static/jpg/Rectangle_5_copy.jpg', price : '$8000' },
                { name  : 'Smart Phone  Primo V1', img : 'static/jpg/Rectangle_5_copy.jpg', price : '$8000' }, 
                { name  : 'Smart Phone  Primo V1', img : 'static/jpg/Rectangle_5_copy.jpg', price : '$8000' }
            ]
        }
    } 

    async componentDidMount() { 
        /*
        let loadedProducts = await firestoreProducts; 
        let products = loadedProducts.map(item => 
            new Object({ id : item.id, name : item.name, price : item.price, img : item.img })
        );
        this.setState({ products : products }); 
        */
    }

    render() {  
        return ( 
            <>
                <SliderBannerBlock>
                    <img src="static/jpg/SliderBannerBackground.jpg" alt="Banner Background" />
                    <SliderBanner /> 
                </SliderBannerBlock>

                <FactsBlock /> 

                <ProductBlockSlider newItem={this.state.products1} topSeller={this.state.products} topRating={this.state.products2} /> 

                <Container>
                    <StockBannerRow>
                        <DiscountPriceBlock> 
                            <OldPrice>$2300</OldPrice>
                            <NewPrice>$1150</NewPrice>
                        </DiscountPriceBlock> 
                        <img src="static/jpg/StockBlock.jpg" alt="Stock Block Product Image" />
                        <StockBannerInner>
                            <h2>50% OFF</h2> 
                            <h3>For Walton Primo GH+</h3>
                            <h4>Power packed performance</h4>
                            <p>
                                Powered by a mighty 1.3 GHz Quad Core Processor and
                                1 GB fast RAM, the Primo GH+ allows seamless multitasking, 
                                faster webpage loading, smoother UI transitions and ultra
                                fast power-up.
                            </p>
                        </StockBannerInner> 
                    </StockBannerRow>
                </Container>  

                <SubscribeRow>
                    <img src="static/jpg/SubscribeRow.jpg" alt="Subscribe Row Background" />
                    <h2>Subscribe for get offer update</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <SubscribeForm onSubmit={(e) => { e.preventDefault(); }} /*onSubmit={this.subscribe}*/>
                        <input type="email" 
                               placeholder="Type your email" 
                               //onChange={this.updateEmailValue}
                               //value={this.state.emailValue} 
                        />
                        <input type="submit" value="Lets go!" />
                    </SubscribeForm>
                </SubscribeRow>
            </>
        );
    }
} 