import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs';
import {FaFacebookF,FaGithub,FaLinkedin} from 'react-icons/fa';
<script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://github.com/iqtier" target="_blank"><FaGithub/></a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/iqtier-ahammad-774327148/" target="_blank"><FaLinkedin/></a>
        </div>
        <div>
          <a href="https://twitter.com/iqttaki" target="_blank"><BsTwitter/></a>
        </div>
        <div>
          <a href="https://instagram.com/iqtier" target="_blank"><BsInstagram/></a>
        </div>
        <div >
          <a href ='https://www.facebook.com/Iq.u.ahammad/' target="_blank"><FaFacebookF/></a>  
        </div>

    </div>

  )
}

export default SocialMedia