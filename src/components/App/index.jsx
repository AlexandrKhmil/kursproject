import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadProducts, loadBannerProducts } from '../../firebase'
import * as ProductActions from '../../actions/products'
import * as SlidesActions from '../../actions/slides'
import { GlobalStyle } from '../GlobalStyle'
import Header from '../Header'
import Footer from '../Footer'
import Home from '../Home'
import Catalog from '../Catalog'

const mapStateToProps = () => ({ })

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({...ProductActions, ...SlidesActions}, dispatch)
}) 

class App extends React.Component {
  async componentWillMount() {
    const { setProducts, setBannerProducts } = this.props

    // Loading list of products to State  
    let products = await loadProducts() 
    products = Object.entries(products).map(I => Object({ id: I[0], ...I[1] }))
    setProducts(products)

    // Set slides products
    let bannerItems = await loadBannerProducts()
    bannerItems = Object.values(bannerItems)
    setBannerProducts(bannerItems)
  }

  render() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Footer />
      </BrowserRouter>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)