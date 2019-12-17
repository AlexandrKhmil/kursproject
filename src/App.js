import React from 'react'; 
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom';

import { GlobalStyle } from './components/global';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import HomePage from './pages/home/home';  
import CatalogPage from './pages/catalog/catalog'; 
import ProductPage from './pages/product/product'; 

function App() { 
	return (
		<Router> 
			<GlobalStyle /> 
			<Header />  
			<Route exact path="/" component={ HomePage } />  
			<Route path="/catalog" component={ CatalogPage } /> 
			<Route path="/product/:productID" component={ ProductPage } /> 
            <Footer />
		</Router>
	);
}

export default App;
