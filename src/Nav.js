import React, {useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import './Nav.css';
function Nav() {
    const [show, handleshow] = useState(false)

    // jha url pr rhoge uske aage profile page ka link ayega aur profile page open hoga
// const history= useHistory(false);
const navigate = useNavigate();

const transtionNavbar = () => {

    if (window.scrollY > 100) {
        handleshow(true)
    } else {handleshow(false);
    }
}
    useEffect(()=>{
        window.addEventListener("scroll",transtionNavbar);
 
    
    return () =>
        window.removeEventListener("scroll",transtionNavbar);
      } , [] );




  return <div className={`nav ${show && "nav_black"}`}>
    
   <div className='Nav_contents'>

   
    <img onClick={()=> navigate("/")}
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />


    <img onClick={()=> navigate("/profile") // history.push("/profile")
}
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Profile"
      />

</div> 



  </div>;
}

export default Nav;




// useHistory ke jgh useNavigate ho gya hai 