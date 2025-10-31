import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/CartView.css";

interface CartViewProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartView: React.FC<CartViewProps> = ({ isOpen, onClose }) => {
  const { state, dispatch } = useCart();

  const total = state.items.reduce(
    (sum, item) => sum + item.quantity * 29.99,
    0
  ); // Using fixed price for demo

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      dispatch({ type: "REMOVE_FROM_CART", payload: id });
    } else {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-content">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="cart-items">
          {state.items.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            state.items.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={
                    item.coverUrl ||
                    "https://via.placeholder.com/60x90?text=Cover"
                  }
                  alt={item.title}
                  className="cart-item-cover"
                />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p className="cart-item-author">{item.author}</p>
                  <div className="cart-item-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                    <button
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                      }
                      className="remove-btn"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-item-price">
                  ${(29.99 * item.quantity).toFixed(2)}
                </div>
              </div>
            ))
          )}
        </div>

        {state.items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-amount">${total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartView;
