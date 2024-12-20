import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Payments from './pages/Payments/Esewa';
import Payment2 from './pages/Payment2/Khalti'
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Footer from './components/footer/footer';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/payment' element={<Payments />} />
          <Route path='/payment2' element={<Payment2 />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
