import React from "react"; 
import ProductItem from './../../containers/ProductItem'; 
import { ProductsBlock, ProductBlockContainer, ProductListChoose, ProductListChooseItem, ProductListWrapper, ProductListHandler, ProductListSlide } from './style';

export default class ProductBlockSlider extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            activeSlide : 2,
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
                <ProductsBlock> 
                    <ProductBlockContainer> 
                        <ProductListChoose>
                            <button onClick={this.slideLeft}><img src="static/png/sm-arrow-left.png" alt="small arrow" /></button>
                            <ProductListChooseItem>
                                <button onClick={() => this.slideTo(1)} className={(this.state.activeSlide === 1) ? 'active' : ''}>New Item </button>
                                <button onClick={() => this.slideTo(2)} className={(this.state.activeSlide === 2) ? 'active' : ''}>Top Seller</button>
                                <button onClick={() => this.slideTo(3)} className={(this.state.activeSlide === 3) ? 'active' : ''}>Top Rating</button>
                            </ProductListChooseItem> 
                            <button onClick={this.slideRight}><img src="static/png/sm-arrow-right.png" alt="small arrow" /></button>               
                        </ProductListChoose>
                        <ProductListWrapper>
                            <ProductListHandler style={{ transform: `translateX(-${100 * (this.state.activeSlide - 1)}%)` }}>
                                <ProductListSlide>
                                {
                                    this.props.newItem.map((item, key) => 
                                        <ProductItem key={key}
                                                    id = {item.id}
                                                    name={item.name} 
                                                    price={item.price}  
                                                    img={item.img} />
                                    )
                                }  
                                </ProductListSlide>
                                <ProductListSlide>
                                {
                                    this.props.topSeller.map((item, key) => 
                                        <ProductItem key={key}
                                        id = {item.id}
                                                    name={item.name} 
                                                    price={item.price}  
                                                    img={item.img} />
                                    )
                                }  
                                </ProductListSlide>
                                <ProductListSlide>
                                {
                                    this.props.topRating.map((item, key) => 
                                        <ProductItem key={key}
                                        id = {item.id}
                                                    name={item.name} 
                                                    price={item.price}  
                                                    img={item.img} />
                                    )
                                }  
                                </ProductListSlide> 
                            </ProductListHandler>
                        </ProductListWrapper> 
                    </ProductBlockContainer> 
                </ProductsBlock> 
            </>
        );
    }
} 