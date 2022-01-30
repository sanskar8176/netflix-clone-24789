import React from 'react';
import './ProfileScreen.css';
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import DummyPlans from './DummyPlans';

function ProfileScreen() {
  //  selectUser ka use krke user details fetch kiya
  const user= useSelector(selectUser);


  return <div className='profileScreen'>
   <Nav/>
  
    <div className="profileScreen_body">

      <h1>Edit Profile</h1>
      <div className="profileScreen_info">
          <img   src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
           alt="Profile" />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            
            <div className="profileScreen_plans">
              <h2>Plans:</h2>
              {/* <PlansScreen/> */}
              <DummyPlans/>
              </div>

              <button onClick={()=>{auth.signOut()}} className="profileScreen_signout ">Sign Out</button>
                  {/* fire base me jo suthentication bnaya h ussse use kiya  */}
            </div>
  
          </div>
      </div>
    
  </div>
};

export default ProfileScreen;
