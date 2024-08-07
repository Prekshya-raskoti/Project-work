import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className='logo' />
            <ul className='navbar-menu'>
                <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
                <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
                <li onClick={()=>setMenu("About")} className={menu==="About"?"active":""}>About</li>
                <li onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active":""}>Contact</li>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search} alt='' style={{ width: '35px', height: '35px' }} />
                <div className='navbar-search-icon'>
                    <img src={assets.cart} alt='' style={{ width: '35px', height: '35px' }} />
                    <div className='dot'></div>
                </div>
                <button>Log In</button>

            </div>
        </div>
    )
}

export default Navbar