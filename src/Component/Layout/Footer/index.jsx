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
} from "../../../Asset/Footer";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        {/* HEADER */}
        <div className="footer_header">
          <img src={NavLogo} alt="footer_logo" />
        </div>
        {/* BODY */}
        <div className="footer_body">
          <div className="footer_primary">
            <div className="footer_primary_row">
              <Link className="footer_text_link">Home</Link>
              <Link className="footer_text_link">Store</Link>
              <Link className="footer_text_link">Cart</Link>
              <Link className="footer_text_link">Wish List</Link>
              <Link className="footer_text_link">About</Link>
              <Link className="footer_text_link">Contact</Link>
              <Link className="footer_text_link">Policy</Link>
              <Link className="footer_text_link">Click</Link>
            </div>
          </div>
          <div className="footer_secondary">
            <h3 className="footer_secondary_header">Connect With Me:</h3>
            <div className="footer_social">
              <Link className="footer_img_link">
                <img src={Twitch} alt="social_logo" />
              </Link>
              <Link className="footer_img_link">
                <img src={Twitter} alt="social_logo" />
              </Link>
              <Link className="footer_img_link">
                <img src={Linkedin} alt="social_logo" />
              </Link>
              <Link className="footer_img_link">
                <img src={Instagram} alt="social_logo" />
              </Link>
              <Link className="footer_img_link">
                <img src={Discord} alt="social_logo" />
              </Link>
              <Link className="footer_img_link">
                <img src={Facebook} alt="social_logo" />
              </Link>
            </div>
          </div>
        </div>
        {/* FOOTER */}

        <p className="footer_footer">
          © 2023 Valve Corporation. All rights reserved. All trademarks are
          property of their respective owners in the US and other countries. VAT
          included in all prices where applicable.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
