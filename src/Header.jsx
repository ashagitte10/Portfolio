import React from "react";
import { Link } from "react-router-dom";

const Header =()=>{
    return(
   <>
   <ul class="nav justify-content-end background ">
  <li class="nav-item">
    <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
  </li>
  <li class="nav-item">
    <Link to="/About" class="nav-link" href="#">About Me</Link>
  </li>
  <li class="nav-item">
    <Link to="/Contact" class="nav-link" href="#">Contact</Link>
  </li>
  <li class="nav-item">
    <Link to="/Experince"class="nav-link" href="#">Experince</Link>
  </li>
</ul>

   </>
    )
}

export default Header;