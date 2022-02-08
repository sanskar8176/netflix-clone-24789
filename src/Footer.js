import React from "react";
import "./Footer.css";
import pic from "./externals/sanskarsingh_pic.jpg";
import { SocialMediaIconsReact } from "social-media-icons-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="borderLine"></div>

      <div className="profileRow">
        
        <div className="imageandcontact">

        <img className="profileimg" src={pic} alt="img" width={100} />
        <div className="callToAction">
          {/* <a href="tel:1234567890">Phone</a> */}
            <a
              onClick={() =>
                window.open("mailto:test@example.com?subject=subject&body=body")
              }
            >
              Email
            </a>

              <a href="https://portfolio.com">My Portfolio</a>


          </div>
        </div>



        <div className="profile_container">
          <div className="aboutme">
            <h1>Sanskar Singh...</h1>
            Hey there! Glad you clicked into my site. I am a self taught developer. I am most passionate in working with MERN projects. For any queries feel free to contact me through the below mentioned links.
          </div>

        

          <div className="socialIcons">
            <div className="icons">
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                icon="linkedin"
                iconColor="rgba(255,255,255,0.6)"
                backgroundColor="rgba(131, 129, 129, 0.67)"
                url="https://linkedin.com"
                size="30"
              />
            </div>
            <div className="icons">
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                icon="github"
                iconColor="rgba(255,255,255,0.6)"
                backgroundColor="rgba(131, 129, 129, 0.67)"
                url="https://github.com"
                size="30"
              />
            </div>
            
            {/* <div className="icons">
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                icon="twitter"
                iconColor="rgba(255,255,255,0.6)"
                backgroundColor="rgba(131, 129, 129, 0.67)"
                url="https://twitter.com"
                size="30"
              />
            </div>
            <div className="icons">
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                icon="facebook"
                iconColor="rgba(255,255,255,0.6)"
                backgroundColor="rgba(131, 129, 129, 0.67)"
                url="https://facebook.com"
                size="30"
              />
            </div>
            <div className="icons">
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                icon="instagram"
                iconColor="rgba(255,255,255,0.6)"
                backgroundColor="rgba(131, 129, 129, 0.67)"
                url="https://instagram.com"
                size="30"
              />
            </div>
            <div className="icons">
              <SocialMediaIconsReact
                borderColor="rgba(0,0,0,0.25)"
                icon="youtube"
                iconColor="rgba(255,255,255,0.6)"
                backgroundColor="rgba(131, 129, 129, 0.67)"
                url="https://youtube.com"
                size="30"
              />
            </div> */}
          </div>
        </div>
      </div>

      <div className="copyright">
        <h4> © Copyright {year} Netflix India. All rights reserved.</h4>
        <h5>--Made with ❤️ from Sanskar Singh--</h5>
      </div>
    </div>
  );
}

export default Footer;
