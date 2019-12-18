import React from "react";  

import { placeOrder } from '../../firebase/firebase';

export default class CheckoutPage extends React.Component {   
    render() {
        const { cartItems, products, removeFromCart } = this.props;

        return ( 
            <>   
                <button onClick={()=>placeOrder({email : 'email', items : cartItems, status : 'notAccepted'})}>Palce ORder</button>
            </>
        );
    }
} 
 