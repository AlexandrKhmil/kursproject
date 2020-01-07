import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ProductActions from '../../actions/products'
import { sortProducts } from '../../functions/sortProducts'
import SliderBanner from '../SliderBanner'
import ProductBlockSlider from '../ProductBlockSlider'
import FactsBlock from '../FactsBlock'
import SubscribeForm from '../SubscribeForm'
import { SliderBannerBlock, SubscribeRow } from './style.jsx'

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