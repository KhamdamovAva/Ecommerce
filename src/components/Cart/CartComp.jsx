import React, { useContext } from 'react';
import "./style.scss";
import { CartContext } from '../../context/Context';

function CartComp() {
  const { cartItems, removeFromCart, decrement, increment } = useContext(CartContext);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <div className="container">
        <div className="about">
          <h3 className='about__title'>Cart</h3>
          <hr />
          <div className="cart">
            {cartItems.length === 0 ? (
              <>
                <h2 className='cart__title'>Your Cart is Empty</h2>
                <a className='btn linkShopping' href="/">Continue Shopping</a>
              </>
            ) : (
              <>
                <div className="cartItems">
                  {cartItems.map((item, id) => (
                    <div key={id} className='cartItem'>
                      <img src={item.img} alt={item.title} className="cartItem__image" />
                      <div className="cartItem__details">
                        <h3>{item.title}</h3>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price per item: {item.price} $</p>
                        <p>Total for this item: {(item.price * item.quantity).toFixed(2)} $</p>
                        <div className="cartItem__buttons">
                          <button onClick={() => decrement(item.id)} className="btn">-</button>
                          <button onClick={() => removeFromCart(item.id)} className="btn">Remove</button>
                          <button onClick={() => increment(item.id)} className="btn">+</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cartSummary">
                  <h3>Total Amount: {totalAmount.toFixed(2)} $</h3>
                  <button className="btn">Proceed to Checkout</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartComp;
