import React from "react"; 
import { Container } from './../../components/container';  
import { BannerSlider,
         FactsWrapper, FactContainer, Fact,
         ProductSlider,
         InfoBannerRow, DiscountPriceBlock, OldPrice, NewPrice, InfoBannerInner,
         SubscribeRow, SubscribeForm } from './style';

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
            emailValue : ''
        }
    }

    updateEmailValue = e => {
        this.setState({
            emailValue: e.target.value
        });
    }

    subscribe = e => {
        // Нужна реализация подписки

        e.preventDefault();
        console.log(`Было введено ${this.state.emailValue}`);
        this.setState({
            emailValue: ''
        });
    }

    render() {  
        return ( 
            <div>
                <BannerSlider>
                    Тут будет слайдер
                </BannerSlider>

                <FactsWrapper>
                    <FactContainer>
                    {
                        factsList.map((item, key) => 
                            <Fact key={key}>
                                <img src={item.svg} alt="Fact About Our Company" />
                                <h4>{item.title}</h4>
                                <h5>{item.subtitle}</h5>
                            </Fact>
                        )
                    }
                    </FactContainer> 
                </FactsWrapper>

                <ProductSlider>
                    Fetured        New Itme        Top Seller        Top Ratting
                </ProductSlider>

                <Container>
                    <InfoBannerRow>
                        <DiscountPriceBlock> 
                            <OldPrice>$2300</OldPrice>
                            <NewPrice>$1150</NewPrice>
                        </DiscountPriceBlock> 
                        <img src="static/jpg/InfoBlock.jpg" alt="Info Block Product Image" />
                        <InfoBannerInner>
                            <h2>50% OFF</h2> 
                            <h3>For Walton Primo GH+</h3>
                            <h4>Power packed performance</h4>
                            <p>
                                Powered by a mighty 1.3 GHz Quad Core Processor and
                                1 GB fast RAM, the Primo GH+ allows seamless multitasking, 
                                faster webpage loading, smoother UI transitions and ultra
                                fast power-up.
                            </p>
                        </InfoBannerInner> 
                    </InfoBannerRow>
                </Container> 

                <SubscribeRow>
                    <img src="static/jpg/SubscribeRow.jpg" alt="Subscribe Row Background" />
                    <h2>SUBCRIBE FOR GET OFFER UPDATE</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <SubscribeForm onSubmit={this.subscribe}>
                        <input type="text" 
                               placeholder="Type your email" 
                               onChange={this.updateEmailValue}
                               value={this.state.emailValue} 
                        />
                        <input type="submit" value="Lets go!" />
                    </SubscribeForm>
                </SubscribeRow>
            </div>
        );
    }
} 