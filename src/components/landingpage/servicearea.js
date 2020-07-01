import React from "react"
import { Link } from "gatsby"
import optimization from "../../images/optomization.png"
import web_development from "../../images/web_development.png"

const ServiceArea = () => (
  <>
    <section className="h2-service-area pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12">
            <div className="section-title">
              <h2 className="title">Services I provide</h2>
              {/* <p className="text">
                I made nine prototypes to understand family needs better and
                redesigned the iOS and Android apps.
              </p> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-6 col-12 my-3">
            <div className="h2-single-service h-100">
              <div className="text-center">
                <img
                  src={optimization}
                  loading="lazy"
                  alt="Website Review and Optimization"
                  className="img-fluid d-none d-lg-inline"
                  width="280"
                />
              </div>
              <div className="content text-center">
                <h4 className="title mt-4">Website Review and Optimization</h4>

                <p className="text">
                  If your website makes you cringe and your prospects leave your
                  website without getting in touch, I can help.
                </p>

                <p className="text">
                  I’ll review your website and give you ultra-actionable and
                  easy-to-implement suggestions that will help you improve your
                  homepage and impress your prospects.
                </p>

                <a
                  href="https://calendly.com/olufemidaniel/consultation"
                  className="link btn-style-1 mt-5"
                >
                  Request Review
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6 col-12 my-3">
            <div className="h2-single-service h-100">
              <div className="text-center">
                <img
                  src={web_development}
                  loading="lazy"
                  alt="Website Development"
                  width="300"
                  className="img-fluid d-none d-lg-inline"
                />
              </div>
              <div className="content text-center">
                <h4 className="title mt-4">Website Development</h4>
                <p className="text">
                  Are you in need of a business website that will generate sales
                  and leads for you.
                </p>

                <p className="text">
                  Are you feed up of how slow your website is and you need a
                  super fast website to improve your visitor's experience?
                </p>

                <p className="text">
                  You're in the right place. I create websites that are not just
                  fast, but structured and designed to generate sales and get
                  you leeds.
                </p>

                <Link to="/contact" className="link btn-style-1 mt-5">
                  Request Web design
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default ServiceArea
