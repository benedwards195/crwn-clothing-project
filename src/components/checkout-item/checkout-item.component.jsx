import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButton,
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { deleteFromBasket, addItemsToCart, removeItemsFromCart } = useContext(CartContext);

  const removeEverything = () => {
    deleteFromBasket(cartItem);
  };

  const addItemHandler = () => addItemsToCart(cartItem);
  const removeItemHandler = () => removeItemsFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <TextContainer className='name'>{name}</TextContainer>
      <QuantityContainer className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer className='price'>{price}</TextContainer>
      <RemoveButton className='remove-button' onClick={removeEverything}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;


// import { CartContext } from '../../contexts/cart.context';
// import { useContext } from 'react';
// import './checkout-item.styles.scss';

// const CheckoutItem = ({ cartItem }) => {
//     const {name, imageUrl, price, quantity} = cartItem;
//     const { deleteFromBasket, addItemsToCart, removeItemsFromCart } = useContext(CartContext);

//     const removeEverything = () => {
//         deleteFromBasket(cartItem);
//     };

//     const addItemHandler = () => addItemsToCart(cartItem);
//     const removeItemHandler = () => removeItemsFromCart(cartItem);

//     return (
//         <div className='checkout-item-container'>
//             <div className='image-container'>
//                 <img src={imageUrl} alt={`${name}`}/>
//                 </div>
//                 <span className='name'>{name}</span>
//                 <span className='quantity'>
//                     <div className='arrow' onClick={removeItemHandler}>
//                         &#10094;
//                     </div>
//                     <span className='value'>{quantity}</span>
//                     <div className='arrow' onClick={addItemHandler}>
//                         &#10095;
//                     </div>
//                 </span>
//                 <span className='price'>{price}</span>
//                 <div className='remove-button' onClick={removeEverything}>&#10005;</div>
//             </div>
//     )
// }



// export default CheckoutItem;