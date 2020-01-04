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
            topSeller : [
                { id : 1, name  : 'СЛайд2', img : 'static/jpg/Rectangle_5_copy.jpg', price : '8000' },
                { id : 1, name  : 'Smart Phone  Primo V1', img : 'static/jpg/Rectangle_5_copy.jpg', price : '8000' }, 
                { id : 1, name  : 'Smart Phone  Primo V1', img : 'static/jpg/Rectangle_5_copy.jpg', price : '8000' }
            ],
            newItem : [
                { id : 1, name  : 'Слайд1', img : 'static/jpg/Rectangle_5_copy.jpg', price : '8000' },
                { id : 1, name  : 'Smart Phone  Primo V1', img : 'static/jpg/Rectangle_5_copy.jpg', price : '8000' }, 
                { id : 1, name  : 'Smart Phone  Primo V1', img : 'static/jpg/Rectangle_5_copy.jpg', price : '8000' }
            ],
            topRating : [
                { id : 1, name  : 'loading', img : 'static/png/SliderProductImage.png', price : '8000' },
                { id : 1, name  : 'loading', img : 'static/png/SliderProductImage.png', price : '8000' }, 
                { id : 1, name  : 'loading', img : 'static/png/SliderProductImage.png', price : '8000' }
            ]
        }
    } 

    render() {  
        const { products, isReady } = this.props;

        return ( 
            <> 
                <SliderBannerBlock>
                    <img src="static/jpg/SliderBannerBackground.jpg" alt="Banner Background" />
                    <SliderBanner products={isReady ? products.filter((item, index) => index > 8 && index < 12)
                        .map(item => { let i = item; i.img='static/png/SliderProductImage.png'; return i }) : this.state.topRating} /> 
                </SliderBannerBlock>

                <FactsBlock />  

                <ProductBlockSlider newItem={isReady ? products.filter((item, index) => index < 3) : this.state.topSeller} 
                                    topSeller={isReady ? products.filter((item, index) => index > 2 & index < 6) : this.state.topSeller}
                                    topRating={isReady ? products.filter((item, index) => index > 5 & index < 9) : this.state.topSeller} />  

                <Container>
                    <StockBannerRow>
                        <DiscountPriceBlock> 
                            <OldPrice>2300 грн</OldPrice>
                            <NewPrice>1150 грн</NewPrice>
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