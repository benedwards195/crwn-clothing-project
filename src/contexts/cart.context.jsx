import { createContext, useState, useMemo, useEffect } from "react";

const addToCart = (cartItems, productToAdd) => {
    // Find if cart items contain product to add
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);
    
    // If found, increment quantity
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    // If not found, add new item to cart with quantity 1
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeFromCart = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
    }

    return cartItems.map(cartItem =>
        cartItem.id === productToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const removeAllFromCart = (cartItems, productToClear) => {
    const currentCartItem = cartItems.find(cartItem => cartItem.id === productToClear.id);

    if (currentCartItem.quantity >= 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToClear.id);
    }

    return cartItems.map(cartItem =>
        cartItem.id === productToClear.id
            ? { ...cartItem, quantity: cartItem.quantity = 0 }
            : cartItem
    );
};


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemsToCart: () => {},
    getCartItemsCount: () => 0,
    removeItemsFromCart: () => {},
    deleteFromBasket: () => {},
    cartCount: 0,
    cartTotal: 0,
});

export const CartProvider = ({ children }) => {
    
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

      useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (finalAmount, cartItem) => finalAmount + cartItem.quantity * cartItem.price,
            0
        );
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemsToCart = (productToAdd) => {
        setCartItems(addToCart(cartItems, productToAdd));
    };

     const removeItemsFromCart = (productToRemove) => {
        setCartItems(removeFromCart(cartItems, productToRemove));
    };

    const deleteFromBasket = (productToDelete) => {
        setCartItems(removeAllFromCart(cartItems, productToDelete));
    };

    const getCartItemsCount = () => {
        return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    };

    const value = useMemo(() => ({
        isCartOpen, setIsCartOpen, addItemsToCart, cartItems,
        removeItemsFromCart, getCartItemsCount, deleteFromBasket, cartTotal,
    }), [isCartOpen, cartItems, cartTotal]);
    // console.log("cartItems:", cartItems);

    return <CartContext.Provider value={value}>{children}</CartContext.Provider> 
}