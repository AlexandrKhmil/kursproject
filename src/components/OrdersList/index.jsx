import React from 'react'
import { OrdersContainer, Order, Items, Status } from './style'

const OrdersList = props => {
  let { items } = props
  return (
    <OrdersContainer>
      <h4>Список ваших заказов:</h4>
      {
        items.map(order => {
          let date = new Date(order.date.seconds * 1000)
          return (
            <Order>
              <h5>
                <span>Заказ №</span> 
                <span>{order.id}</span>
              </h5>
              <ul>
                <li>Сделан: <span>{date.getDate()}.{date.getMonth() + 1}.{date.getUTCFullYear()}</span></li>
                <li>Номер телефона: <span>{order.tel}</span></li>
                <li>Адрес доставки: <span>{order.address.length > 10 ? order.address.split(0, 10) + '...' : order.address}</span></li>
                <li>Суммарная стоимость: <span>{order.items.reduce((prev, item) => prev + item.price*item.count, 0)} грн.</span></li>
              </ul>
              <Items>
                <h6>Список товаров</h6>
                <div>
                {
                  order.items.map((item, key) =>
                    <div>{item.name} x {item.count} шт.</div>
                  )
                }
                </div>
              </Items>
              <Status>
                <span>Статус:</span> 
                <span>{order.status === 'not_accepted' ? 'Обрабатывается' :
                  (order.status === 'accepted' ? 'Принят' : 'Готов' )}
                </span>
              </Status>
            </Order>
          )
        })
      }
    </OrdersContainer>
  )
}

export default OrdersList