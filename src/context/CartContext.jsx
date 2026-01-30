import React, { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialize state with data from localStorage, or an empty array if none exists
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Use useEffect to update localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
    alert("Item has been added to Cart.");
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== id));
  };

  // Function to update the quantity
  const increaseQuantity = (item) => {
    setCartItems((prevItems) => {
    const existingItem = prevItems.find((i) =>i.id === item.id);

    if(existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
    }
  });

  };
  
  // Function to decrease the quantity
  const decreaseQuantity = (item) => {
    setCartItems((prevItems) => {
    const existingItem = prevItems.find((i) =>i.id === item.id);

    if(existingItem) {
        return prevItems.map((i) =>
          i.id === item.id && i.quantity > 0 ? { ...i, quantity: i.quantity - 1 } : i
        );
    }
  });

  };

  // You can also add functions for increasing/decreasing quantity, clearing the cart, etc.

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity}}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to easily consume the cart context in other components
export const useCart = () => useContext(CartContext);
