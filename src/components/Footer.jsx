import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <AiFillFacebook />
        <AiFillInstagram /> <AiFillTwitterCircle />
        <FaWhatsappSquare />
      </div>
      <p> &copy; 2023 gdDataAnalysistic.com </p>
    </div>
  );
}

export default Footer;
