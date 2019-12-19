import React from "react";   
import {CheckoutContainer, LeftPart, AsideBlock, AsideItem, AsideList, SuccessBlock} from './style';
import {OrderForm} from './orderForm';

import { placeOrder } from '../../firebase/firebase';

export default class CheckoutPage extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {
            successPayment : false, 
            email : '',
            phone : '',
            address : '',
            orderId : null
        }
    }

    componentWillMount() {
        this.setState({successPayment : false});
    }

    changeEmail = e => {
        this.setState({email : e.target.value })
    }

    changePhone = e => {
        this.setState({phone : e.target.value })
    }

    changeAddress = e => {
        this.setState({address : e.target.value })
    }

    async formOrder() {
        let { cartItems } = this.props;
        let orderId = await placeOrder({email:this.state.email, phone : this.state.phone, address : this.state.address, items: cartItems, status : 'not accepted'}); 
        this.setState({successPayment : true});
    }

    render() {
        const { cartItems, products, removeFromCart } = this.props; 
        let cartIsEmpty = (cartItems.length !== 0);
        return ( 
            <CheckoutContainer>
                { !this.state.successPayment 
                ? <>
                <LeftPart>
                    <OrderForm onSubmit={(e) => { e.preventDefault(); this.formOrder() }}>
                        <h2>Оформить заказ</h2>
                        <input type="email" placeholder="Ваш email..." disabled={!cartIsEmpty} value={this.state.email} onChange={this.changeEmail} />
                        <input type="tel" placeholder="Ваш телефон..." disabled={!cartIsEmpty} value={this.state.phone} onChange={this.changePhone} /* pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" */ />
                        <input type="text" placeholder="Адресс..." disabled={!cartIsEmpty} value={this.state.address} onChange={this.changeAddress} />
                        {cartIsEmpty ? <button type="submit" disabled={!cartIsEmpty}>Order</button> : null }
                    </OrderForm>
                </LeftPart>

                <AsideBlock>
                    <AsideItem>
                        <h3>Your Cart</h3>
                        <AsideList>
                        { 
                            cartIsEmpty ?  
                            cartItems.map((item, key) => {
                                let product = products.find(product => product.id == item.id);
                                return (
                            <li key={key}> 
                                <img src={product.img} alt="Product" />
                                <div>
                                    <h4>{product.name}</h4> 
                                    <p>кол-во: {item.count}</p>
                                    <p>{item.count * product.price}грн</p>
                                </div> 
                            </li>
                                )
                            }) 
                           : <p>Корзина пуста</p>
                        } 
                        </AsideList>
                    </AsideItem>
                </AsideBlock>
                </>
                : <SuccessBlock>
                    <h2>Успешный заказ. </h2>
                </SuccessBlock> 
                } 
            </CheckoutContainer>
        );
    }
} 
// 