import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer container-fluid footer bg-dark text-light p-4 h-100">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h5>About Me</h5>
                            <hr />
                            <p className="w-75">
                             I believe in continuous learning and staying updated with the 
                        latest industry trends. I'm not just a Engineer; 
                        I'm a Innovative Thinker! 
                        My approach involves innovative ideas, ensuring that every project 
                        I undertake is a success.
                            </p>
                            <hr />
                            <div className="d-flex mt-4">
                                <p>Contact Me - </p>
                                <div className="d-flex me-2">
                                    {/* Add your Facebook link and icon or text here */}
                                    <a
                                        href="https://www.facebook.com/profile.php?id=100094476235504"
                                     target="_blank" rel="noopener noreferrer" > <IoLogoWhatsapp></IoLogoWhatsapp></a>
                                   <a
                                        href="https://www.facebook.com/profile.php?id=100094476235504"
                                     target="_blank" rel="noopener noreferrer" > <FaFacebook></FaFacebook></a>
                                     <a
                                        href="https://www.facebook.com/profile.php?id=100094476235504"
                                     target="_blank" rel="noopener noreferrer" > <AiFillInstagram></AiFillInstagram></a>
                                     <a
                                        href="https://www.facebook.com/profile.php?id=100094476235504"
                                     target="_blank" rel="noopener noreferrer" > <FaLinkedin></FaLinkedin></a>
                               <a
                                        href="https://www.facebook.com/profile.php?id=100094476235504"
                                     target="_blank" rel="noopener noreferrer" > <SiGmail></SiGmail></a>
                               
                                </div>
                            </div>
                        </div>

                        <div className="footerlinks col-md-4 col-12">
                            <h5>Quick Links</h5>
                            <hr />
                            <ul>
                                <li>
                                    <a aria-current="page" className="active" href="/">Home</a>
                                </li>
                                <li>
                                <a aria-current="page" className="active" href="/Contact">Contact</a>
                                
                                    </li>
                                    <li>
                                    <a aria-current="page" className="active" href="/About">About</a>
                                    </li>
                                    <li>
                                    <a aria-current="page" className="active" href="/Experince">Experince</a>
                                </li>
                                <br></br>
                                <hr></hr>


                                {/* Add more quick links as needed */}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
