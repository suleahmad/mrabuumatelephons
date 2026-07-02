import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Cart.css';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const { user } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');

  if (!isOpen) return null;

  const total = cartItems.reduce((acc, item) => {
    const priceNum = parseInt(item.price.replace(/\D/g, ''));
    return acc + priceNum;
  }, 0);

  const formatPrice = (num: number) => `Tsh ${num.toLocaleString()}`;

  const handleCheckout = async () => {
    if (!user) {
      setMessage('Tafadhali ingia au jisajili kwanza ili kununua.');
      return;
    }
    if (cartItems.length === 0) return;

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user: user._id,
          orderItems: cartItems,
          paymentMethod: 'Cash on Delivery',
          totalPrice: total
        })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Hongera! Oda yako imepokelewa kikamilifu. Tutawasiliana nawe hivi punde.');
        clearCart();
      } else {
        setMessage('Kuna hitilafu. ' + data.message);
      }
    } catch (error) {
      setMessage('Tatizo la mtandao. Tafadhali jaribu tena.');
    }
    setLoading(false);
  };

  return (
    <div className="cart-backdrop" onClick={onClose}>
      <div className="cart-sidebar glass-panel" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Kikapu Chako</h2>
          <button className="close-btn" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Kikapu chako kipo wazi. Ongeza bidhaa!</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.imageUrl || '/mrabuu_logo.png'} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(index)}>Toa</button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Jumla:</span>
              <span>{formatPrice(total)}</span>
            </div>
            {message && <div className="cart-message">{message}</div>}
            <button className="btn-primary w-full" onClick={handleCheckout} disabled={loading}>
              {loading ? 'Tunasindika Oda...' : 'Kamilisha Manunuzi (Checkout)'}
            </button>
          </div>
        )}
        
        {cartItems.length === 0 && message && (
          <div className="cart-footer">
             <div className="cart-message success">{message}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
