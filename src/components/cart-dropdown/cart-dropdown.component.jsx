import React from 'react';
import CastumButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CastumButton>GO TO CHECKOUT</CastumButton>
    </div>
);

export default CartDropdown;