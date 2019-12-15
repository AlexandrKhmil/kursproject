import React from "react"; 

import ProductItem from './../../components/productItem/productItem';
import { Container } from './../../components/container';

import { FactsWrapper, FactsContainer, Fact } from './factsBlock'; 
import { StockBannerRow, DiscountPriceBlock, OldPrice, NewPrice, StockBannerInner } from './stockBlock';
import { SubscribeRow, SubscribeForm } from './subscribeBlock';

import { BannerSlider, ProductsBlock } from './style';
 
import { firestoreProducts } from './../../firebase/firebase';

const factsList = [
    { title : 'First Shipping',  subtitle : 'Get you every whare', svg : "static/svg/fact_1.svg" },
    { title : 'Secure Store',    subtitle : '100% Secure Store',   svg : "static/svg/fact_2.svg" },
    { title : 'Save Time',       subtitle : 'Save Your Time',      svg : "static/svg/fact_3.svg" },
    { title : 'Pay on Delivery', subtitle : 'Get you every whare', svg : "static/svg/fact_4.svg" },
]; 

export default class HomePage extends React.Component {  
    constructor(props) {
        super(props);
        this.state = { 
            products : [
                //{ title  : 'Smart Phone  Primo V1', imgSrc : 'static/jpg/Rectangle_5_copy.jpg', price : '$8000' }
            ]
        }
    } 

    async componentDidMount() { 
        let loadedProducts = await firestoreProducts; 
        let products = loadedProducts.map(item => 
            new Object({ id : item.id, name : item.name, price : item.price, img : item.img })
        );
        this.setState({ products : products }); 
    }

    render() {  
        return ( 
            <>
                <BannerSlider>
                    Тут будет слайдер
                </BannerSlider>
 
                <FactsWrapper>
                    <FactsContainer>
                    {
                        factsList.map((item, key) => 
                            <Fact key={key}>
                                <img src={item.svg} alt="Fact About Our Company" />
                                <h4>{item.title}</h4>
                                <h5>{item.subtitle}</h5>
                            </Fact>
                        )
                    }
                    </FactsContainer> 
                </FactsWrapper>

                <ProductsBlock> 
                    {
                        this.state.products.map((item, key) => 
                            <ProductItem key={key}
                                         name={item.name} 
                                         price={item.price}  
                                         img={item.img} />
                        )
                    }  
                </ProductsBlock>

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