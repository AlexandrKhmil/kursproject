import React from "react";  

import { NavLink } from 'react-router-dom'; 
import { SlideWrapper, SlideHandler, Slide, SlideContainer, Arrows, NavButtons } from './style';
 
export default class SliderBanner extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            activeSlide : 1,
            slidesCount : 3,
        }

        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
        this.slideTo = this.slideTo.bind(this);
    }
 
    slideLeft() { 
        if (this.state.activeSlide > 1) {
            this.setState({ activeSlide : (this.state.activeSlide - 1) });
        }  
    }

    slideRight() {  
        if (this.state.activeSlide < this.state.slidesCount) {
            this.setState({ activeSlide : (this.state.activeSlide + 1) }); 
        } 
    }

    slideTo(index) {
        if (this.state.activeSlide != index) {
            this.setState({ activeSlide : index });
        }  
    }

    render() {  
        return (  
            <>
                <SlideWrapper>
                    <SlideHandler style={{ transform: `translateX(calc(-${this.state.activeSlide * 100 / this.state.slidesCount}% + 100vw))` }}>
                    {
                        this.props.products.map((item, key) => 
                        <Slide key={key}>
                            <SlideContainer>
                                <img src={item.img} alt="Slider" />
                                <h3>{item.name}</h3>
                                <NavLink to={`/product/${item.id}`}>Go to Page</NavLink>
                            </SlideContainer> 
                        </Slide>  )
                    } 
                    </SlideHandler> 
                </SlideWrapper> 
                <Arrows>
                    <button onClick={this.slideLeft}>
                        <img src="static/png/LeftArrow.png" alt="SliderArrow" />
                    </button>
                    <button onClick={this.slideRight}>
                        <img src="static/png/RightArrow.png" alt="SliderArrow" />
                    </button>
                </Arrows>
                <NavButtons>
                    <button onClick={() => this.slideTo(1)} className={(this.state.activeSlide === 1) ? 'active' : ''} />
                    <button onClick={() => this.slideTo(2)} className={(this.state.activeSlide === 2) ? 'active' : ''} />
                    <button onClick={() => this.slideTo(3)} className={(this.state.activeSlide === 3) ? 'active' : ''} />
                </NavButtons>
            </>
        );
    }
} 

/* 
    <Slide>
        <SlideContainer>
            <img src="static/png/SliderProductImage.png" alt="Slider" />
            <h3>Android</h3>
            <NavLink to="/product/1">Born  for  Shooting</NavLink>
        </SlideContainer> 
    </Slide>  
    <Slide>
        <SlideContainer>
            <img src="static/png/SliderProductImage.png" alt="Slider" />
            <h3>Android2</h3>
            <NavLink to="/product/1">Чтото там</NavLink>
        </SlideContainer> 
    </Slide>  
    <Slide>
        <SlideContainer>
            <img src="static/png/SliderProductImage.png" alt="Slider" />
            <h3>Android3</h3>
            <NavLink to="/product/1">Еще чтото</NavLink>
        </SlideContainer> 
    </Slide>  
*/