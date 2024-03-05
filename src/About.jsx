import React from "react";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const About = () => {
  return (
    <>

      <div className="text-center">
        <h2 className="shadow p-2">About Me</h2>
        <br></br>
        <p>Professional Profile - There Is All About Me</p>
      </div>
      <div className="pe-4 ps-4 border border-10">
        <div className="row">
          <div className="col-6">
            <img src="../photo1.png" alt="Asha Gitte" />
          </div>
          <div className="col-6" >
            <h2>
              <i>I'm Asha Gitte</i>
            </h2>
            <p>
              Hello! I'm Asha, a passionate and creative Software Engineer based in Pune. With a strong
              background in Engineering, I bring 3 years of experience to the table.
              <br></br>
              <br></br>
              <h4>What I Do</h4>
              I specialize in Software Devlopment, where I blend technical expertise with a keen
              eye for design. My goal is to create Web applications, providing innovative solutions to complex problems.
              <br></br>
              <br></br>
              <h4>My Journey</h4>
              My journey in Software began 3 years ago when I started software testing at <b>AMDOCS,PUNE</b>. Since then, I've had the privilege of working with Previous Employers/Projects, where I honed my skills and developed a deep passion for Software Devlopment.

              <br></br>
              <br></br>
              <h4>What Sets Me Apart</h4>

              I believe in continuous learning and staying updated with the latest industry trends. I'm not just a [Your Profession/Title]; I'm a [Your Unique Selling Proposition/What Sets You Apart]. My approach involves [Your Approach/Philosophy], ensuring that every project I undertake is a success.
            </p>

            <div className="container">
              <div className="row">
                {/* Details */}
                {/* ... */}
              </div>

              {/* Social Media Links */}

              <Link
                to="https://chat.openai.com/c/21f4610d-9a41-4f6f-add3-daf1751dab76"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <IoLogoWhatsapp size={24} />
              </Link>
              <Link
                to="https://chat.openai.com/c/21f4610d-9a41-4f6f-add3-daf1751dab76"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                to="https://chat.openai.com/c/21f4610d-9a41-4f6f-add3-daf1751dab76"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <AiFillInstagram size={24} />
              </Link>
              <Link
                to="https://chat.openai.com/c/21f4610d-9a41-4f6f-add3-daf1751dab76"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                to="https://www.linkedin.com/in/asha-gitte-software-engineer"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <SiGmail size={24} />
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
