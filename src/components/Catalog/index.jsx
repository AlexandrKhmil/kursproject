import React from 'react'
import Breadcumbs from '../Breadcumbs' 
import ProductList from '../ProductList'
import { Aside, AsideItem, AsideList } from '../Aside' 
import FactsBlock from '../FactsBlock'

import { Container } from './style'

const breadcumbItems = [ 
  { title : 'Catalog', link : '/catalog' },
  { title : 'All' }
]

const AsideItems = [
  { title: 'Category', items: [ 
    { title: 'One' }, { title: 'Two' }, { title: 'Three' }
  ]},
  { title: 'Another', items: [ 
    { title: 'One' }, { title: 'Two' }, { title: 'Three' }
  ]} 
]

const Catalog = () => 
  <main>
    <Container>
      <Breadcumbs items={breadcumbItems} />

      <ProductList items={[]} />

      <Aside>
        { AsideItems.map((I1, K) =>
          <AsideItem key={K}>
            <h3>{I1.title}</h3>
            <AsideList>
            { I1.items.map((I2, K) =>
              <li key={K}>
                <button>{I2.title}</button>
              </li>
            )}
            </AsideList>
          </AsideItem>
        )}
      </Aside>
    </Container> 
    <FactsBlock />
  </main>

export default Catalog