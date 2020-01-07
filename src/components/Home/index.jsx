import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ProductActions from '../../actions/products'
import SliderBanner from '../SliderBanner'
import FactsBlock from '../FactsBlock'
import { SliderBannerBlock } from './style.jsx'

const mapStateToProps = ({ products, slides }) => ({ 
  products: products.items,
  bannerProducts: slides.banner.map(item => products.items.find(product => product.id === item.item))
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(ProductActions, dispatch)
}) 

const Home = props => {
  const { bannerProducts } = props
  return (
    <main>
      <SliderBannerBlock>
        <img src="static/jpg/SliderBannerBackground.jpg" alt="Banner Background" />
        <SliderBanner products={bannerProducts} /> 
      </SliderBannerBlock>

      <FactsBlock /> 
    </main>
  )
} 

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)