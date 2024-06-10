import './product-card.styles.scss';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button, {button_type_classes} from '../button/button.component';
// import { set } from 'firebase/database';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemsToCart } = useContext(CartContext);

    const addProductToCart = () => addItemsToCart(product);

    return (
    <div className='product-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
            <span className='name'>
                {name}
            </span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType={button_type_classes.inverted} onClick={addProductToCart}>Add To Cart</Button>
    </div>
    );
};

export default ProductCard;