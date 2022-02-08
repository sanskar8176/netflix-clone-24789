import React, { useRef } from 'react';
import "./SigninScreen.css";
import {auth} from "../firebase";

function SigninScreen() {

    // fetching input data 
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    
    const register=(e)=>{
        e.preventDefault();   // preventing reload 

    auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
    )

    .catch((error)=>{alert(error.message);})
    
    };
    const signIn=(e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .catch((error)=>{alert(error.message);})
    
    };

    // .then((authUser)=>{console.log(authUser);})

  return <div className='SigninScreen'>

<form action="">

<h1>Sign In </h1>
<input ref={emailRef} type="email" placeholder='Email' />
<input ref={passwordRef} type="password" placeholder='password' />
<button onClick={signIn} type='submit'>Sign In</button>

<h4>
 <span className='signupScreen_gray'> New to Netflix ? </span>
<span onClick={register} className='signupScreen_link'> Sign Up now.  </span> 
</h4>

</form>



  </div>
};

export default SigninScreen;
