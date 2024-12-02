import React, { useState, useContext } from 'react';
import axios from 'axios'; 
import './LoginPopup.css';
import cross_icon from '../../assets/cross_icon.png'; // Correct asset import
import facebook from '../../assets/facebook_icon.png';
import linkedin from '../../assets/linkedin_icon.png';
import google from '../../assets/google_icon.png';

import { StoreContext } from '../../context/StoreContext';

const LoginPopup = ({ setShowLogin }) => {

  const { url,setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  }

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState==="Login") {
      newUrl += "/api/user/login"
    }
     else {
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl,data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token);
      setShowLogin(false)
    } else {
      alert(response.data.message)
    }
  };

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={cross_icon} alt='Close' />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? null : (
            <input
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <button type="submit">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        <div className='login-popup-condition'>
          <input type='checkbox' required />
          <p className='agree'>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login" ? (
          <p className='createAccount'>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}

        <label>or continue with</label>
        </form>
        <div className="continue-btn">
          <div>
            <button className="socialmedia-btn" type="button" onClick={() => console.log('Facebook login')}>
              <img src={facebook} alt="Facebook" className='facebook' /><b><img src={google} alt="Google" className='google' /></b><b><img src={linkedin} alt="LinkedIn" className='linkedin' /></b>
            </button>
          </div>
        </div>
      
    </div>
  );
};

export default LoginPopup;