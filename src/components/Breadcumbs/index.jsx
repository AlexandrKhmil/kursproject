import React from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ProductActions from '../../actions/products'
import { BreadcrumbBlock, Breadcrumb } from './style'
import { NavLink } from 'react-router-dom'

const mapStateToProps = () => ({ })

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(ProductActions, dispatch)
})

const Breadcumbs = props => {
  const { items, setProductCategoriesAllowed } = props
  return (
    <BreadcrumbBlock>
			<Breadcrumb>
			  { items.map((I, K) => 
            <li key={K}>
            { I.link !== undefined 
                ? <NavLink to={I.link} onClick={() => setProductCategoriesAllowed("All")}>{I.title}</NavLink> 
                : I.title
            } 
            </li>
        )}  
			</Breadcrumb>
		</BreadcrumbBlock> 
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Breadcumbs) 