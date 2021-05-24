import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CastumButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';



const CartDropdown = ({ cartItems, history, dispatch }) => {
    
    const handleClick = (event) => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
    }

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length
                        ? (
                            cartItems.map(cartItem => (
                                <CartItem key={cartItem.id} item={cartItem} />
                            ))
                        ) : (
                            <span className='empty-message'>Your cart is empty</span>
                        )
                }
            </div>
            <CastumButton onClick={handleClick}>GO TO CHECKOUT</CastumButton>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});



export default withRouter(connect(mapStateToProps)(CartDropdown));