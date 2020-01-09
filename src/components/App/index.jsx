import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadProducts, loadBannerProducts } from '../../firebase'
import * as ProductActions from '../../actions/products'
import * as SlidesActions from '../../actions/slides'
import * as UserActions from '../../actions/user'
import * as OrdersActions from '../../actions/orders'
import { GlobalStyle } from '../GlobalStyle'
import Header from '../Header'
import Footer from '../Footer'
import Login from '../Login'
import Registration from '../Registration'
import Message from '../Message'
import Home from '../Home'
import Catalog from '../Catalog'
import Product from '../Product'
import Checkout from '../Checkout'
import Account from '../Account'  
import { firebaseAuth, getOrders } from '../../firebase'

const mapStateToProps = () => ({ })

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...ProductActions, 
      ...SlidesActions, 
      ...UserActions, 
      ...OrdersActions
    }, 
    dispatch
  )
}) 

class App extends React.Component {
  async setOrdersFunc(email, setOrders) { 
    //const { setOrders } = this.props
    let orders = await getOrders(email) 
    let userOrders = Object.entries(orders)
      .map(item => ({id: item[0], ...item[1]}))
      .filter(item => item.email === email)
    setOrders(userOrders)
  }
  
  async componentWillMount() {
    const { setProducts, setBannerProducts, setUser, setOrders } = this.props
    let setOrdersFuncInner = this.setOrdersFunc

    // Loading list of products to State  
    let products = await loadProducts() 
    products = Object.entries(products).map(I => Object({ id: I[0], ...I[1] }))
    setProducts(products)

    // Set slides products
    let bannerItems = await loadBannerProducts()
    bannerItems = Object.values(bannerItems)
    setBannerProducts(bannerItems)

    // User Stuff 
    firebaseAuth.onAuthStateChanged(function(user) {
      if (user) { 
        // var displayName = user.displayName;
        var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;   
        setUser({ email: email }) 
        setOrdersFuncInner(email, setOrders)
      } else {   
        setUser(null)
      }
    })
  }

  render() {  
    return (
      <BrowserRouter> 
        <GlobalStyle />
        <Header />
        {/* Modals */}
        <Login />
        <Registration />
        <Message />
        {/* Pages */}
        <Route exact path="/" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/product/:productID" component={ Product } /> 
        <Route path="/checkout" component={Checkout} />
        <Route path="/account" component={Account} />
        <Footer />
      </BrowserRouter>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)