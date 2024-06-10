import { useContext, useState } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { ShoppingIcon, CartItemContainer, ItemCount } from './cart-icon.styles.jsx';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, getCartItemsCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartItemContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{getCartItemsCount()}</ItemCount>
        </CartItemContainer>
    )
};

export default CartIcon;