import React from 'react';
import "./cart-dropdown.styles.scss";
import CustomButton from '../../components/custom-button/custom-button.component';
import CartItem from '../../components/cart-item/cart-item.component';
import { connect as connectRedux } from 'react-redux';

const CartDropDown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
)
const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
}
);

export default connectRedux(mapStateToProps)(CartDropDown);