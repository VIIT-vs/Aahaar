
import React from 'react';

function Signin() {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <div className="header">
          <div className="text">Sign In</div>
          <div className="underline"></div>
        </div>

        <div className="input">
          <img src="/email_logo.jpg" alt="Email logo" />
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="input">
          <img src="/password_logo.jpg" alt="Password logo" />
          <input type="password" placeholder="Enter your password" />
        </div>

        <div className="forgot-password">
          Forgot Password? <span>Click here!</span>
        </div>

        <button className="submit-btn">Sign In</button>
      </div>
    </div>
  );
}

export default Signin;

