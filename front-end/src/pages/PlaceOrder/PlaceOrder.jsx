import React, { useState, useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
import khalti_logo from '../../assets/khalt logo.png'
import esewa_logo from '../../assets/esewa.PNG'
import arko_khalti from '../../assets/khalti-logo-F0B049E67E-seeklogo.com.png'
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount,token,food_list,cartItems,url } = useContext(StoreContext);
  const [showOptions, setShowOptions] = useState(false);

  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
  country:"",
   phone:""
 })

 const onChangeHandler = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setData(data=>({...data,[name]:value}))
 }

 
  
  // Toggle dropdown visibility
  const toggleOptions = () => {
    if (Object.values(data).some((value) => value.trim() === '')) {
      alert('Please fill in all the delivery fields!');
      return;
    }
  
    // Save delivery data to localStorage for later use in Esewa
    localStorage.setItem('deliveryData', JSON.stringify(data));
    setShowOptions(!showOptions);
  };
  
  const navigate = useNavigate();

  return (
    <form className="place-order">
      {/* Delivery Information */}
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First Name" />
          <input  name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Last Name" />
        </div>
        <input name='email' onChange={onChangeHandler} value={data.email} type="email"  placeholder="Email Address" />
        <input  name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder="Street Address" />
        <div className="multi-fields">
          <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder="City" />
          <input name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input  name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder="Zip Code" />
          <input name='country' onChange={onChangeHandler}value={data.country} type="text" placeholder="Country" />
        </div>
        <input name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder="Phone Number" />
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