import React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.png"

const Footer = () => (
  <>
    <footer>
      <div class="container">
        <div class="footer-top-area">
          <div class="row">
            <div class="col-lg-4 col-sm-3 col-12">
              <div class="f-logo">
                <Link to="/" class="link">
                  <img src={Logo} alt="" style={{width: "30%"}} />
                </Link>
              </div>
            </div>
            <div class="col-lg-4 col-sm-5 col-12">
              <div class="f-title">
                <h2 class="title">Thanks for visiting</h2>
              </div>
            </div>
            <div class="col-lg-4 col-sm-4 col-12">
              <div class="f-chat">
                <Link to="/contact" class="link btn-style-1">
                  LET’S CHAT
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom-area">
          <div class="footer-copyright">
            <p class="copyright">
              © 2020 Olufemi Oladotun Daniel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </>
)

export default Footer
