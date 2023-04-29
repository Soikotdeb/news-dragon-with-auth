import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { FaFacebook,FaTwitter,FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="mt-4 bg-dark text-white text-center p-4">
  <Container>
    <div className="row">
      <div className="col-md-12">
        <h3>
          &copy; 2023 The Dragon News. All rights reserved. |{" "}
          <Link href="/privacy-policy" className="text-white">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="/terms-of-service" className="text-white">
            Terms of Service
          </Link>
        </h3>
        <p>
          Contact us at: <Link to="sdsoikot424@gmail.com" className="text-white">sdsoikot424@gmail.com</Link> | Phone: 123-456-7890
        </p>
        <p>
          Follow us on social media:{" "}
          <Link to="https://www.facebook.com/dragonnews" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">
          <FaFacebook/>  Facebook
          </Link>{" "}
          |{" "}
          <Link to="https://twitter.com/dragonnews" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">
          <FaTwitter/> Twitter
          </Link>{" "}
          |{" "}
          <Link to="https://www.instagram.com/dragonnews" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">
          <FaInstagram/> Instagram
          </Link>
        </p>
      </div>
    </div>
  </Container>
</footer>

    </div>
  );
};

export default Footer;
