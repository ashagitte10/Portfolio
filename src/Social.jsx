import React from "react";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Social =()=>{
    return(
        <>
        {/* <ul class="nav justify-content-start"  style={{backgroundColor:"lightsalmon",height:"20px",fontSize:"10px"}}>
       <li class="nav-item">
         <Link to="/" class="nav-link active" aria-current="page" href="#">Instagram</Link>
       </li>
       <li class="nav-item">
         <Link to="/About" class="nav-link" href="#">whatsupp</Link>
       </li>
       <li class="nav-item">
         <Link to="/Contact" class="nav-link" href="#">facebook</Link>
       </li>
       <li class="nav-item">
         <Link to="/Experince"class="nav-link" href="#">twitter</Link>
       </li>
     </ul> */}
     <div class="nav justify-content-start"  style={{backgroundColor:"lightsalmon",height:"20px",fontSize:"10px", padding:"2px"}}>
              <Link
                to="https://chat.openai.com/c/21f4610d-9a41-4f6f-add3-daf1751dab76"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <IoLogoWhatsapp size={18} />
              </Link>
              <Link
                to="https://chat.openai.com/c/21f4610d-9a41-4f6f-add3-daf1751dab76"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <FaFacebook size={18} />
              </Link>
              <Link
                to="https://chat.openai.com/c/21f4610d-9a41-4f6f-add3-daf1751dab76"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <FaInstagramSquare  size={18} />
              </Link>
              <Link
                to="https://chat.openai.com/c/21f4610d-9a41-4f6f-add3-daf1751dab76"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <FaLinkedin size={18} />
              </Link>
              <Link
                to="https://chat.openai.com/c/21f4610d-9a41-4f6f-add3-daf1751dab76"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <SiGmail size={19} />
              </Link>
              </div>
        </>
    )
}

export default Social