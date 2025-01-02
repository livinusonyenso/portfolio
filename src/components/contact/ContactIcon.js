import React from 'react'
import { FaFacebook,FaTwitter,FaLinkedin } from "react-icons/fa";


function ContactIcon() {
  return (
    
            <div className="flex gap-2">
                <span className="bannerIcon"><FaFacebook/></span>
                <span className="bannerIcon"><FaTwitter/></span>
                <span className="bannerIcon"><FaLinkedin/></span>
          
          </div>
  )
}

export default ContactIcon