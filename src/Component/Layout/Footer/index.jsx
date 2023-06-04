import React from "react";
import NavLogo from "../../../Asset/Navbar/NavLogo.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  Discord,
  Twitch,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  Hash,
  Portfolio,
} from "../../../Asset/Footer";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        {/* HEADER */}
        <div className="footer_header">
          <Link className="footer_header_logo">
            <img src={NavLogo} alt="footer_logo" />
            <h3 className="footer_header_title">PLAYVERSE</h3>
          </Link>
        </div>
        {/* BODY */}
        <div className="footer_body">
          <div className="footer_primary">
            <div className="footer_primary_row">
              <Link className="footer_text_link" to="/">
                Home
              </Link>
              <Link className="footer_text_link" to="/productList">
                Store
              </Link>
              <Link className="footer_text_link" to="/cart">
                Cart
              </Link>
              <Link className="footer_text_link" to="/wishList">
                Wish List
              </Link>
            </div>
          </div>
          <div className="footer_secondary">
            <h3 className="footer_secondary_header">Connect With Me:</h3>
            <div className="footer_social">
              <a
                className="footer_img_link"
                href="https://github.com/vivekbhatt07"
                target="_blank"
              >
                <img src={Github} alt="social_logo" />
              </a>
              <a
                className="footer_img_link"
                href="https://twitter.com/vivekbhatt07"
                target="_blank"
              >
                <img src={Twitter} alt="social_logo" />
              </a>
              <a
                className="footer_img_link"
                href="https://www.linkedin.com/in/vivekbhatt07/"
                target="_blank"
              >
                <img src={Linkedin} alt="social_logo" />
              </a>
              <a
                className="footer_img_link"
                href="https://hashnode.com/@vivekbhatt07"
                target="_blank"
              >
                <img src={Hash} alt="social_logo" />
              </a>
              <a
                className="footer_img_link"
                href="https://vivekbhatt.netlify.app/"
                target="_blank"
              >
                <img src={Portfolio} alt="portfolio_logo" />
              </a>
            </div>
          </div>
        </div>
        {/* FOOTER */}

        <p className="footer_footer">
          © 2023 PlayVerse Corporation. All rights reserved. All trademarks are
          property of their respective owners in the US and other countries. VAT
          included in all prices where applicable.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
