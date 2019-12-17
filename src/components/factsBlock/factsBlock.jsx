import React from "react";  
import { FactsWrapper, FactsContainer, Fact } from './style';  

const factsList = [
    { title : 'First Shipping',  subtitle : 'Get you every whare', svg : "static/svg/fact_1.svg" },
    { title : 'Secure Store',    subtitle : '100% Secure Store',   svg : "static/svg/fact_2.svg" },
    { title : 'Save Time',       subtitle : 'Save Your Time',      svg : "static/svg/fact_3.svg" },
    { title : 'Pay on Delivery', subtitle : 'Get you every whare', svg : "static/svg/fact_4.svg" },
]; 

export default class FactsBlock extends React.Component {  
    render() {  
        return ( 
            <FactsWrapper>
                <FactsContainer>
                {
                    factsList.map((item, key) => 
                        <Fact key={key}>
                            <img src={item.svg} alt="Fact About Our Company" />
                            <h4>{item.title}</h4>
                            <h5>{item.subtitle}</h5>
                        </Fact>
                    )
                }
                </FactsContainer> 
            </FactsWrapper>
        );
    }
} 


