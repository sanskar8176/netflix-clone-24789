import React, { useState } from "react";
import "./LoginScreen.css";
import SigninScreen from "./SigninScreen.js";

function LoginScreen() {
        const [signIn, setsignIn]=useState(false);



  return (
    <div className="Loginscreen">
     
     
      <div className="LoginScreen_background">
        <img
          className="LoginScreen_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
          alt="logo"
        />

        <button onClick={()=>setsignIn(true)} className="LoginScreen_button">Sign In</button>

        <div className="LoginScreen_gradient"></div>
        
      </div>

<div className="LoginScreen_body">
{signIn ? (<SigninScreen/>): 
(<>
 <h1>Unlimited files, TV programes and more.</h1>
<h2>Watch anywhere, Cancel anytime.</h2>
<h3> Ready to watch? Enter your email to create or restart your membership. </h3>
<div className="LoginScreen_input">
   <form action="">
    <input  type="email" name="login_input" id="login_input" placeholder="Your Email" />
   
    <button  onClick={()=>setsignIn(true)}className="LoginScreen_getstarted">GET STARTED</button>

   </form>
</div>
</>

)};
</div>

      
    </div>
  );
}

export default LoginScreen;
