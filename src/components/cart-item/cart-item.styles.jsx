import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const CartItemImage = styled.img`
  width: 30%;
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const ItemName = styled.span`
  font-size: 16px;
`;

export const RemoveButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
`;


// .cart-item-container {
//     width: 100%;
//     display: flex;
//     height: 80px;
//     margin-bottom: 15px;
  
//     img {
//       width: 30%;
//     }
  
//     .item-details {
//       width: 70%;
//       display: flex;
//       flex-direction: column;
//       align-items: flex-start;
//       justify-content: center;
//       padding: 10px 20px;
  
//       .name {
//         font-size: 16px;
//       }
//     }
//   }
  