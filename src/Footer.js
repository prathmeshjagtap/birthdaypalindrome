import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div class="footer">
          <h2>Connect with me on</h2>
          <a href="https://www.linkedin.com/in/prathmeshjagtap">
            {/* <h1>LinkedIN</h1> */}
            <FontAwesomeIcon
              className="icon"
              icon={["fab", "linkedin"]}
              size="2x"
            />
          </a>
          <a href="https://twitter.com/prathmesh_20">
            <FontAwesomeIcon
              className="icon"
              icon={["fab", "twitter"]}
              size="2x"
            />
          </a>
          <a href="https://www.instagram.com/prathmesh_jagtap_/">
            <FontAwesomeIcon
              className="icon"
              icon={["fab", "instagram"]}
              size="2x"
            />
          </a>
          <a href="https://github.com/prathmeshjagtap">
            <FontAwesomeIcon
              className="icon"
              icon={["fab", "github"]}
              size="2x"
            />
          </a>
          <a href="https://jagtap-prathmesh.netlify.app/">
            <FontAwesomeIcon className="icon" icon="user-circle" size="2x" />
          </a>

          <h5>© 2021 | prathmesh | Privacy Policy</h5>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
