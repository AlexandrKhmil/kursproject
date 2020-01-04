import React from 'react'; 
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom';

import { GlobalStyle } from './components/global';

import Header from './containers/Header';
import Footer from './components/footer/footer';
 
import Home from './containers/Home';
import Catalog from './containers/Catalog'; 
import Product from './containers/Product';
import Checkout from './containers/Checkout';

import { firestoreProducts } from './firebase/firebase'; 

export default class App extends React.Component {
	async componentWillMount() {
		// Loading of products list in the Redux Store
		const { setProducts } = this.props; 
		const loadedProducts = await firestoreProducts; 
		setProducts(loadedProducts);   
	} 

	render() { 
		return (
			<Router>  
				<GlobalStyle />  
				<Header />  
				<Route exact path="/" component={ Home } />  
				<Route path="/catalog" component={ Catalog } /> 
				<Route path="/product/:productID" component={ Product } /> 
				<Route path="/checkout" component={ Checkout } /> 
				<Footer />
			</Router>
		)
	}
}  
