import React from 'react'; 
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom';

import { GlobalStyle } from './components/global';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import HomePage from './pages/home/home';  
import CatalogPage from './pages/catalog/catalog'; 
import ProductPage from './pages/product/product'; 

export default class App extends React.Component {
	componentWillMount() {
		const { setBooks } = this.props;
		setBooks([{q : 1, w : 2}]); 
	} 

	render() {
		const { books, isReady } = this.props;
		return (
			<Router> 
				{ !isReady
					? 'ЗАГРУЗКА'
					:  books.map((item) => console.log(item))

				}

				<GlobalStyle /> 


				<Header />  
				<Route exact path="/" component={ HomePage } />  
				<Route path="/catalog" component={ CatalogPage } /> 
				<Route path="/product/:productID" component={ ProductPage } /> 
				<Footer />
			</Router>
		)
	}
}  
