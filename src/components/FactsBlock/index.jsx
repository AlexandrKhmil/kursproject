import React from 'react'
import { FactsWrapper, FactsContainer, Fact } from './style';  

const factsList = [
  { title : 'First Shipping',  subtitle : 'Get you every whare', svg : "../static/svg/fact_1.svg" },
  { title : 'Secure Store',    subtitle : '100% Secure Store',   svg : "../static/svg/fact_2.svg" },
  { title : 'Save Time',       subtitle : 'Save Your Time',      svg : "../static/svg/fact_3.svg" },
  { title : 'Pay on Delivery', subtitle : 'Get you every whare', svg : "../static/svg/fact_4.svg" },
]

const FactsBlock = () => 
  <FactsWrapper>
    <FactsContainer>
      { factsList.map((I, K) => 
        <Fact key={K}>
          <img src={I.svg} alt="Fact About Our Company" />
          <h4>{I.title}</h4>
          <h5>{I.subtitle}</h5>
        </Fact>
      )}
    </FactsContainer> 
  </FactsWrapper> 

export default FactsBlock