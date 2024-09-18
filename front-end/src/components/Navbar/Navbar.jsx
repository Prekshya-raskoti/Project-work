import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");

    const { getTotalCartAmount,token,setToken} =useContext(StoreContext);
    const navigate = useNavigate();

    // Define the logout function
    const logout = () =>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/")  // Navigate to home after logging out
    };

    return (
        <div className='navbar'>
            <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>HOME</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>MENU</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>ABOUT</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>CONTACT</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="Search" style={{ width: '35px', height: '35px' }} />
                <div className='navbar-search-icon'>
                    <Link to='/cart'><img src={assets.basket_icon} alt="Cart" style={{ width: '35px', height: '35px' }} /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                {!token?<button onClick={() => setShowLogin(true)}>Sign in/up</button>
                    : <div className='navbar-profile'>
                        <img src={assets.profile_icon} alt="" />
                        <ul className='nav-profile-dropdown'>
                            <li><img src={assets.bag_icon} alt="Orders" /><p>Orders</p></li>
                            <hr />
                            <li onClick={logout}><img src={assets.logout_icon} alt="Logout" /><p>Logout</p></li>
                        </ul>
                    </div>}
            </div>
        </div>
    );
};

export default Navbar;
