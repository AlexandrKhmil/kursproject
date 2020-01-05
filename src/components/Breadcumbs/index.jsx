import React from "react";  
import { BreadcrumbBlock, Breadcrumb } from './style';
import { NavLink } from 'react-router-dom';

const Breadcumbs = props => {
  const { items } = props
  return (
    <BreadcrumbBlock>
			<Breadcrumb>
			  { items.map((I, K) => 
            <li key={K}>
            { I.link !== undefined 
                ? <NavLink to={I.link}>{I.title}</NavLink> 
                : I.title
            } 
            </li>
        )}  
			</Breadcrumb>
		</BreadcrumbBlock> 
  )
}

export default Breadcumbs