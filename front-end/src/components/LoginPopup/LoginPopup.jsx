import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import facebook from '../../assets/facebook_icon.png'
import twitter from '../../assets/twitter_icon.png'
import linkedin from '../../assets/linkedin_icon.png'

const LoginPopup = ({setShowLogin}) => {

  const [currState,setCurrState]= useState("Sign Up")

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''/>
        </div>
    <div class="login-popup-inputs">
        {currState==="Login"?<></>:<input type="text" placeholder="  Your name" required />}
                <input type="email"  placeholder="  Your email" required />
                <input type="password"  placeholder=" Password" required /> 
            </div>
            
            <hr/>
           
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className='login-popup-condition'>
                <input type='checkbox' required/>
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account? <span onClick={()=> setCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
            
            <label>or continue with</label>
        
            <div class="continue-btn">
                
                    {/* <button class="google-btn" ><img src={facebook} alt=""/><b> SIGN IN WITH GOOGLE</b></button> */}
        
                <div>
                    <button class="facebook-btn"><img src={twitter} alt=""/><b>SIGN IN WITH FACEBOOK</b></button>
                </div>
                <div class="linkedlin-btn">
                    <button class="linkedlin-btn"><img src={linkedin} alt=""/><b>SIGN IN WITH LINKEDIN</b></button>
                </div>
          
            </div>
        </form>
        </div>
    
  )
}

export default LoginPopup