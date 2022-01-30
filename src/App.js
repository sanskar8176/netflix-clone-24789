import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import './App.css';
import { auth } from './firebase';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';


import { login, logout, selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';





function App() {

  // const user={name: "sanskar"};
  // const user=null;
  const user = useSelector(selectUser);   // jo userSlice se mila tha


const dispatch =useDispatch();


useEffect(()=>{
  // state change ko listen krta h and cookie ke form me store rkhta hai 
 const unsubscribe = auth.onAuthStateChanged(userAuth=>{
   
  if(userAuth){
      // logged in 
      console.log(userAuth);
      dispatch(login ({
        uid: userAuth.uid,
        email: userAuth.email 
      })
      );


    }
    else{
      // logged out 
      dispatch(logout());    // ye logout userslice.js me hai
    }
  })

  return unsubscribe;
},[dispatch]);





  return (
    <div className="app">
    
    <Router>

{!user? (<LoginScreen/>)   :  
( <Routes> 
<Route  path="/" element={<HomeScreen/>}/>
<Route  path="/profile" element={<ProfileScreen/>}/>

 </Routes>)}
    
    </Router>





    </div>
  );
}

export default App;


// Switch ke jgh Routes use hone lga hai 