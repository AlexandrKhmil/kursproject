import React from "react"
import ProductList from '../ProductList'
import { ProductsBlock, ProductBlockContainer, ProductListChoose, 
  ProductListChooseItem, ProductListWrapper, ProductListHandler, Slide } from './style'

export default class ProductBlockSlider extends React.Component {  
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
		if (this.state.activeSlide !== index) {
			this.setState({ activeSlide : index });
		}  
	} 

	render() { 
    const { newItem, recomended, topRating } = this.props
		return ( 
			<>  
				<ProductsBlock> 
					<ProductBlockContainer> 
						<ProductListChoose>
							<button onClick={this.slideLeft}><img src="static/png/sm-arrow-left.png" alt="small arrow" /></button>
							<ProductListChooseItem>
								<button onClick={() => this.slideTo(1)} className={(this.state.activeSlide === 1) ? 'active' : ''}>New Item </button>
								<button onClick={() => this.slideTo(2)} className={(this.state.activeSlide === 2) ? 'active' : ''}>Recomended</button>
								<button onClick={() => this.slideTo(3)} className={(this.state.activeSlide === 3) ? 'active' : ''}>Top Rating</button>
							</ProductListChooseItem> 
							<button onClick={this.slideRight}><img src="static/png/sm-arrow-right.png" alt="small arrow" /></button>               
						</ProductListChoose>
						<ProductListWrapper>
							<ProductListHandler style={{ transform: `translateX(-${33.33 * (this.state.activeSlide - 1)}%)` }}>
								<Slide>
									<ProductList items={newItem} /> 
								</Slide>
								<Slide>
									<ProductList items={recomended} /> 
								</Slide> 
								<Slide>
									<ProductList items={topRating} /> 
								</Slide> 
							</ProductListHandler>
						</ProductListWrapper> 
					</ProductBlockContainer> 
				</ProductsBlock> 
			</>
		);
	}
} 