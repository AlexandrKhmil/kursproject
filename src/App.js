import React from 'react'; 
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {GlobalStyle} from './components/global';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from './pages/home/home'; 
import AccountPage from './pages/account/account'; 
import CartPage from './pages/cart/cart'; 
import CheckoutPage from './pages/checkout/checkout'; 

function App() {
	return (
		<Router> 
			<GlobalStyle />
			
			<Header /> 

			<Route path="/account" component={AccountPage} />
			<Route path="/cart" component={CartPage} />
			<Route path="/checkout" component={CheckoutPage} />
			<Route exact path="/" component={HomePage} />  
			
            <Footer />
		</Router>
	);
}

export default App;
