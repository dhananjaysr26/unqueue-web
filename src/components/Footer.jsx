import React from "react";
import "../styles/Footer.css";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
export const Footer = () => {
  return (
    <footer>
      <div className="title">
        <p>Unqueue is Virtual Queue App use for easy management of people</p>
      </div>
      <ul className="social_icons">
      <div className="title">
      <p>Follow US:</p>
      </div>
        <li>
          <a href="">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="">
            <BsFacebook />
          </a>
        </li>
        <li>
          <a href="">
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a href="">
            <AiFillTwitterCircle />
          </a>
        </li>
      </ul>

      <p className="copy">©Unqueue App | All Rights Reserved</p>
    </footer>
  );
};
