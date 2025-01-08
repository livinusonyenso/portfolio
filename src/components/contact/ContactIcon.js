import React from 'react'
import { FaFacebook,FaTwitter,FaLinkedin } from "react-icons/fa";


function ContactIcon() {
  return (
    
            <div className="flex gap-2">
               <a href='https://web.facebook.com/livinus.onyenso' target='_blank' rel="noopener noreferrer">
               <span className="bannerIcon"><FaFacebook/></span>
               </a> 
               <a href='https://x.com/livinusonyenso' target='_blank' rel="noopener noreferrer">
               <span className="bannerIcon"><FaTwitter/></span>
               </a>
               <a href='https://www.linkedin.com/in/ugwuja-livinus-ekene-frontenddeveloper/' target='_blank' rel="noopener noreferrer">
               <span className="bannerIcon"><FaLinkedin/></span>
               </a>

           
          
          </div>
  )
}

export default ContactIcon