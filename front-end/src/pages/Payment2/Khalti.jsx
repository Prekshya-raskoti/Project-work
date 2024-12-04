import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { jsPDF } from 'jspdf';
import { assets } from '../../assets/assets';
import './khalti.css'

const Khalti = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  const [deliveryData, setDeliveryData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  // Load delivery data from localStorage on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('deliveryData')) || {};
    setDeliveryData(savedData);
  }, []);

  // Generate a random bill number
  const generateBillNumber = () => `BILL-${Math.floor(100000 + Math.random() * 900000)}`;
  const billNumber = generateBillNumber();

  // Generate and download the PDF
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Payment Receipt', 20, 20);

    doc.setFontSize(12);
    doc.text(`Bill Number: ${billNumber}`, 20, 40);
    Object.entries(deliveryData).forEach(([key, value], index) => {
      doc.text(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`, 20, 50 + index * 10);
    });

    doc.text(`Subtotal: Rs ${getTotalCartAmount()}`, 20, 150);
    doc.text(`Delivery Fee: Rs ${getTotalCartAmount() === 0 ? 0 : 2}`, 20, 160);
    doc.text(`Total: Rs ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}`, 20, 170);

    doc.save('Payment_Receipt.pdf'); // Save the PDF
  };

  // Handle payment confirmation
  const handlePayment = () => {
    const orderData = {
      ...deliveryData,
      billNumber,
      date: new Date().toLocaleDateString(),
      total: getTotalCartAmount() + 2,
    };

    // Save order to localStorage (replace with API call in production)
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));

    alert(`Payment successful! Bill Number: ${billNumber}`);
    navigate('/confirmation'); // Redirect to confirmation page
  };

  return (
    <div className="esewa-container">
      <h2>Payment via Khalti</h2>
      <form className="payment-form">
        {/* Delivery Information */}
        <fieldset>
          <legend>Delivery Information</legend>
          {Object.entries(deliveryData).map(([key, value]) => (
            <div key={key}>
              <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
              <div className='inputs-Delivery-Information'>
              <input type="text" value={value} disabled />
              </div>
            </div>
          ))}
        </fieldset>

        {/* Cart Totals */}
        <div className='Khalti'>
        <fieldset>
          <legend>Cart Totals</legend>
          <div className='Subtotal'>
            <label>Subtotal:</label>
            <div className='input-Cart-Totals'>
            <input type="text" value={`Rs ${getTotalCartAmount()}`} disabled />
            </div>
          </div>
          <div className='Subtotal'>
            <label>Delivery Fee:</label>
            <div className='input-Cart-Totals'>
            <input type="text" value={getTotalCartAmount() === 0 ? 'Rs 0' : 'Rs 2'} disabled />
            </div>
          </div>
          <div className='Subtotal'>
            <label>Total:</label><div className='input-Cart-Totals'>
            <input
              type="text"
              value={`Rs ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}`}
              disabled
            /></div>
          </div>
        </fieldset>
        

        {/* Bill Details */}
        <fieldset>
          <legend>Bill Details</legend>
          <div className='Subtotal'>
            <label>Bill Number:</label>
            <div className='input-bill-number'>
            <input type="text" value={billNumber} disabled />
            </div>
          </div>
        </fieldset>
        </div>
        <div>
          <img className='img-khalti' src={assets.Khalti} alt="" />
          </div>
        {/* Payment Button */}
        <div className='scanner'>
        <button type="button" className="paymentss-button" onClick={handlePayment}>
          Confirm Payment
        </button>

        {/* Download PDF Button */}
        <button type="button" className="download-button" onClick={downloadPDF}>
          Download Bill
        </button>
        </div>
      </form>
    </div>
  );
};


export default Khalti