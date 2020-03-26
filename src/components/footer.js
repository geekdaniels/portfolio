import React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.png"

const Footer = () => (
  <>
    <footer>
      <div className="container">
        <div className="footer-top-area">
          <div className="row">
            <div className="col-lg-4 col-sm-3 col-12">
              <div className="f-logo">
                <Link
                  to="/"
                  className="link"
                  title="Welcome I am olufemi oladotun Daniel, Web optimization specialist"
                >
                  <img
                    loading="lazy"
                    src={Logo}
                    alt="Welcome I am olufemi oladotun Daniel, Web optimization specialist"
                    style={{ width: "30%" }}
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-5 col-12">
              <div className="f-title">
                <h2 className="title">Thanks for visiting</h2>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-12">
              <div className="f-chat">
                <Link
                  to="/contact"
                  className="link btn-style-1"
                  title="Contact and get in touch with me"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area">
          <div className="footer-links">
            <ul className="links">
              {/* <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">WORKS</a>
              </li>
              <li>
                <a href="#">CASE STUDY</a>
              </li>
              <li>
                <a href="#">CLIENTS</a>
              </li> */}
              <li>
                <Link to="/about" href="#">About</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer-copyright">
            <p className="copyright">
              © 2020 Olufemi Oladotun Daniel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </>
)

export default Footer
