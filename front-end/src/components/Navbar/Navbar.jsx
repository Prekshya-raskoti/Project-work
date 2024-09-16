import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("menu");

    const {getTotalCartAmount}= useContext(StoreContext);
    return (
        <div className='navbar'>
          <Link to ='/'><img src={assets.logo} alt="" className='logo' /></Link>
            <ul className='navbar-menu'>
                <Link to ='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>HOME</Link>
                <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>MENU</a>
                <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>ABOUT</a>
                <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>CONTACT</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt='' style={{ width: '35px', height: '35px' }} />
                <div className='navbar-search-icon'>
                   <Link to='/cart'><img src={assets.basket_icon} alt='' style={{ width: '35px', height: '35px' }} /></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>Sign  in/up</button>
                {/* <button onClick={()=>setShowContact(true)}>ContactUs</button> */}

            </div>
        </div>
    )
}

export default Navbar