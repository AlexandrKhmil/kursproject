import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CartActions from '../../actions/cart' 
import FactsBlock from '../FactsBlock'
import Breadcumbs from '../Breadcumbs' 
import { ProductPageContainer, ProductInner, LeftBlock, RightBlock, ParametersList, PriceBlock } from './style'

const mapStateToProps = ({ products }) => ({ 
  products: products.items
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(CartActions, dispatch)
}) 

const listOfKeyExceptions = ['id', 'name', 'category', 'img', 'description', 'price', 'dateAdded', 'imgURL']
const breadcumbItems = [{ title : 'Catalog', link : '/catalog' }]

const Product = props => {
	const { products, addProductToCart } = props
	const product = products.find(item => item.id === props.match.params.productID)

  return (
    <main>   
			<ProductPageContainer> 
				{
					product !== undefined ?
					<>
					<Breadcumbs items={ [...breadcumbItems, { title : product.name}]} />  
					<ProductInner>
						<LeftBlock>
							<img src={product.imgURL} alt="Product" />
						</LeftBlock>
						<RightBlock>
							<h1>{product.name}</h1>
							<ParametersList>
							{
								Object.entries(product).map((item, key) => 
								listOfKeyExceptions.indexOf(item[0]) === -1 
								? <li key={key}><span>{item[0]}:</span> <span>{item[1]}</span></li>
								: null  
								)
							} 
							</ParametersList> 
							<p>{product.description}</p>
							<PriceBlock>
								<span>{product.price} грн</span>
							</PriceBlock>
							<button onClick={ () => addProductToCart(product.id) }>Add to cart</button>
						</RightBlock> 
					</ProductInner> 
					</>
					: null
				} 
			</ProductPageContainer>  
			
			<FactsBlock />
		</main>
  )
} 

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product)