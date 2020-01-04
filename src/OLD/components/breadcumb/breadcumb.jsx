import React from "react";  
import { BreadcrumbBlock, Breadcrumb } from './style';
import { NavLink } from 'react-router-dom';

export default class Breadcumb extends React.Component { 
    render() {
        return (
            <BreadcrumbBlock>
                <Breadcrumb>
                {
                    this.props.items.map((item, index) => 
                    <li key={index}>
                    {
                        item.link !== undefined ? 
                        <NavLink to={ item.link }>{item.title}</NavLink> : item.title
                    } 
                    </li>)
                }  
                </Breadcrumb>
            </BreadcrumbBlock> 
        )
    }
}