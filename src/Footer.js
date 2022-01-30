import React from 'react';
import './Footer.css';

import {SocialMediaIconsReact} from 'social-media-icons-react';


function Footer() {

const year= new Date().getFullYear();



  return <div className='footer'>

<div className="borderLine"></div>

<div className='socialIcons'>


<div className='icons'>

<SocialMediaIconsReact  borderColor="rgba(0,0,0,0.25)" icon="twitter" iconColor="rgba(255,255,255,0.6)" backgroundColor="rgba(131, 129, 129, 0.67)" url="https://some-website.com/my-social-media-url" size="48" />
</div>
<div className='icons'>

<SocialMediaIconsReact  borderColor="rgba(0,0,0,0.25)" icon="facebook" iconColor="rgba(255,255,255,0.6)" backgroundColor="rgba(131, 129, 129, 0.67)" url="https://some-website.com/my-social-media-url" size="48" />
</div>
<div className='icons'>

<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="instagram" iconColor="rgba(255,255,255,0.6)" backgroundColor="rgba(131, 129, 129, 0.67)" url="https://some-website.com/my-social-media-url" size="48" />
</div>
<div className='icons'>

<SocialMediaIconsReact  borderColor="rgba(0,0,0,0.25)" icon="youtube" iconColor="rgba(255,255,255,0.6)" backgroundColor="rgba(131, 129, 129, 0.67)" url="https://some-website.com/my-social-media-url" size="48" />
</div>

</div>


<div className='callToAction'>

<a href="tel:1234567890">Phone :<span > + 91 1234567890</span></a>
</div>

<div  className='callToAction' onClick={()=>window.open('mailto:test@example.com?subject=subject&body=body')}>Email: <span >test@example.com</span> 
</div>





<div className='copyright'> 
<h4> © Copyright {year} Netflix India. All rights reserved.</h4>
<h5>--Made with ❤️ from Sanskar Singh--</h5>
</div>

  </div>;
}

export default Footer;
