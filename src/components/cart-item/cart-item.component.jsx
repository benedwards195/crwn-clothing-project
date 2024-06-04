import { useContext } from 'react';
import './cart-item.styles.scss';
import { CartContext } from '../../contexts/cart.context';


const CartItem = ({ cartItem }) => {

    const { name, imageUrl, price, quantity } = cartItem;
    const { removeItemsFromCart } = useContext(CartContext);

    const handleRemove = () => {
        removeItemsFromCart(cartItem);
    };
 
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
            <button onClick={handleRemove}>-</button>
            </div>
        </div>
    );
};

export default CartItem;