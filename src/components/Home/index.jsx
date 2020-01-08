import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ProductActions from '../../actions/products'
import { sortProducts } from '../../functions/sortProducts'
import SliderBanner from '../SliderBanner'
import ProductBlockSlider from '../ProductBlockSlider'
import FactsBlock from '../FactsBlock'
import SubscribeForm from '../SubscribeForm'
import Container from '../Container'
import { StockBannerRow, DiscountPriceBlock, OldPrice, NewPrice, StockBannerInner } from './style';
import { SliderBannerBlock, SubscribeRow } from './style'

const mapStateToProps = ({ products, slides }) => ({ 
  products: products.items, 
  bannerProducts: slides.banner.map(item => products.items.find(product => product.id === item.item))
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(ProductActions, dispatch)
}) 

const Home = props => {
  const { products, bannerProducts, } = props
 
  const newItems = sortProducts(products, 'date_descending').slice(0, 4) 
  const recomended = products.slice(4, 8)
  const topRating = sortProducts(products, 'rating_descending').slice(0, 4)

  return (
    <main>
      <SliderBannerBlock>
        <img src="static/jpg/SliderBannerBackground.jpg" alt="Banner Background" />
        <SliderBanner products={bannerProducts} /> 
      </SliderBannerBlock> 
      <FactsBlock /> 

      <ProductBlockSlider 
        newItem={newItems} 
				recomended={recomended}
				topRating={topRating} 
      />  

      <Container>
				<StockBannerRow>
					<DiscountPriceBlock> 
						<OldPrice>2300 грн</OldPrice>
						<NewPrice>1150 грн</NewPrice>
					</DiscountPriceBlock> 
					<img src="static/jpg/StockBlock.jpg" alt="Stock Block Product" />
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
				<p>Подпишитесь чтобы получать первым информацию об акциях и новых товарах111</p> 
        <SubscribeForm onSubmit={() => {}}/>
			</SubscribeRow>
    </main>
  )
} 

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)