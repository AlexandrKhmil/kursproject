import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { GlobalStyle } from '../GlobalStyle'
import Header from '../Header'
import Footer from '../Footer'

import Home from '../Home'
import Catalog from '../Catalog'

const mapStateToProps = () => ({ })

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(() => {}, dispatch)
}) 

let App = () => 
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Route exact path="/" component={Home} />
    <Route path="/catalog" component={Catalog} />
    <Footer />
  </BrowserRouter>

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)