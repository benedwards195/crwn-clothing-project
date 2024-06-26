import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import {CartDropDownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles.jsx';
import { CartContext } from '../../contexts/cart.context';



const CartDropDown = () => {

    const { cartItems, removeItemsFromCart } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <CartDropDownContainer>
            <CartItems>
                {
                    cartItems.length ? cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    )) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )}
                     </CartItems>
                <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
        </CartDropDownContainer>
    )

}


export default CartDropDown;