import React from 'react'
import Breadcumbs from '../Breadcumbs'
import FactsBlock from '../FactsBlock'

import { Container } from './style'

const breadcumbItems = [ 
  { title : 'Catalog', link : '/catalog' },
  { title : 'All' }
]

const Catalog = () => 
  <main>
    <Container>
      <Breadcumbs items={breadcumbItems} />
    </Container> 
    <FactsBlock />
  </main>

export default Catalog