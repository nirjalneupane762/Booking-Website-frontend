import { Heading } from "@chakra-ui/react";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div id='footer'>
      <div className='footerContainer'>
        <div className='textPart'>
          <Heading>Yatra Booking</Heading>
          <span>
          Unlock incredible deals and discounts as you navigate through a world of possibilities, making your travel dreams a reality. 
          Book with confidence, embark on unforgettable adventures, and create memories that last a lifetime with our hotel, flight, and place booking website.
          </span>
        </div>
        <div className='socialMedia'>
          <BsInstagram />
          <BiLogoLinkedin />
          <BsFacebook />
        </div>
      </div>
    </div>
  );
};
export default Footer;
