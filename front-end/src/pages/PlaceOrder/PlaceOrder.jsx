import React, { useState, useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
import khalti_logo from '../../assets/khalt logo.png'
import esewa_logo from '../../assets/esewa.PNG'
import arko_khalti from '../../assets/khalti-logo-F0B049E67E-seeklogo.com.png'
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [showOptions, setShowOptions] = useState(false);

  // Toggle dropdown visibility
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  const navigate = useNavigate();

  return (
    <form className="place-order">
      {/* Delivery Information */}
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street Address" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone Number" />
      </div>

      {/* Cart Total Section */}
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>Rs {getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>Rs {getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>Rs {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
          </div>
        </div>

        {/* Payment Options */}
        <div className="payment-section">
          <button
            onClick={toggleOptions}
            type="button"
            className="payment-button"
          >
            PROCEED TO PAYMENT
          </button>

          {showOptions && (
            <div className="payment-options">
             
              <div className="payment-option">
                <input type="radio" id="esewa" name="payment" value="eSewa" />
                <label htmlFor="esewa">
                <button onClick={()=>navigate('/payment')}><img src={esewa_logo} alt='esewa logo' style={{ width: '100px', height: '30px' }} /></button>
                  
                </label>
              </div>
              <div className="payment-option">
                <input type="radio" id="khalti" name="payment" value="Khalti" />
                <label htmlFor="khalti">
                <button onClick={()=>navigate('/payment2')}>
                <img src={arko_khalti} alt="Khalti Logo" style={{ width: '120px', height: '30px' }} />
                </button>
                </label>
              </div>
            </div>
          )}

        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
