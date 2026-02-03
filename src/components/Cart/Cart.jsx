import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title}
              <button id="minus" onClick={() => decreaseQuantity(item)}>−</button>
              <input type="number" value={item.quantity}></input>
              <button id="plus" onClick={() => increaseQuantity(item)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <Link to={`/order`}><button>Complete Order</button></Link>
    </div>
  );
};

export default Cart;
