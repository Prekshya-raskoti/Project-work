import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Footer from './components/footer/footer'
// import ContactUs from './components/ContactUs/ContactUs'

const App = () => {
    const [showLogin,setShowLogin] = useState(false)
  
  return (
  <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
        {/* {showLogin?<ContactUs setShowLogin={setShowLogin}}/>:<></>} */}


    <div className='app'>
      
<Navbar setShowLogin={setShowLogin}/>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/cart' element={<Cart/>} />
<Route path='/order' element={<PlaceOrder/>} />
{/* <Route path='/contactUs' element={<ContactUs/>}/> */}
</Routes>
</div>
<Footer/>
</>
    
  )
}

export default App