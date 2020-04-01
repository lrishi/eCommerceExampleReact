import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import "./cart-icon.styles.scss";
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect as connectRedux } from 'react-redux';

const CartIcon = ({ toggleCartHidden }) => (
    <div className="cart-icon" onClick={toggleCartHidden} >
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connectRedux(null, mapDispatchToProps)(CartIcon);