import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Container from '../Container'
import OrdersList from '../OrdersList'

const mapStateToProps = ({orders, products}) => ({ 
  ordersList: orders.map(order =>
    ({ 
      ...order, 
      items: order.items.map(item =>
        ({
          ...products.items.find(product => item.id === product.id),
          count: item.count
        })
    ) })
  )
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(() => {}, dispatch)
}) 

const Account = props => {
  const { ordersList } = props

  return (
    <main>
      <Container>
      </Container>
      <OrdersList 
        items = { ordersList }
      />
    </main>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account)  