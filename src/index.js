import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user.context'; // Make sure you are importing the UserProvider
import { ProductProvider } from './contexts/product.context';
import { CartProvider } from './contexts/cart.context';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>  {/* Ensure the context provider is used correctly */}
      <ProductProvider>
        <CartProvider>
        <App />
        </CartProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
