import React, { useState } from 'react'
import './Loginsignup.css'
import user_icon from '../assets/person.png'
import email_icon  from '../assets/email.png'
import password_icon from '../assets/password.png'


const Loginsignup = () => {
      
  const[action,setAction]=useState("Sign Up");



  return (
    <div className='container'>
      <div className="header">
        <div className="text">
          {action}
        </div>
        <div className="underline"></div>
        </div>
        <div className="inputs">
          {action==="Sign In" ?<div></div>:<div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='name' />
          </div>}
         
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='email' />
          </div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='password' />
          </div>
        </div>
        <div className="forgot-password">forgot password? <span>click here!</span></div>
        <div className="submit-container">
          <div className={action==="Sign In"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Sign In")}}>Sign In</div>

        </div>
    </div>
  )
}

export default Loginsignup
