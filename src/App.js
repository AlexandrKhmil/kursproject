import React from 'react'; 
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {GlobalStyle} from './components/global';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import HomePage from './pages/home/home';  
import CatalogPage from './pages/catalog/catalog';

function App() {
	return (
		<Router> 
			<GlobalStyle />
			
			<Header />  
			<Route exact path="/" component={HomePage} />  
			<Route path="/catalog" component={CatalogPage} />
			
            <Footer />
		</Router>
	);
}

export default App;
