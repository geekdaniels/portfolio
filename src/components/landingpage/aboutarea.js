import React from "react"

const AboutArea = () => (
  <>
    <section className="h2-about-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12">
            <div className="h2-about-banner">
              <div className="banner">
                <img src={About_img} alt="" />
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-12 d-flex align-items-center">
            <div className="h2-about-content">
              <div className="section-title">
                <p className="intro">ABOUT ME</p>
                <h2 className="title">Why hire me for your next project?</h2>
              </div>
              <p className="text">
                Meet my startup design agency{" "}
                <span className="color">Shape Rex</span> Currently I am working
                at <span className="color">CodeNext</span> as Product Designer.
                Before that I’ve worked at{" "}
                <span className="color">SpurBee</span>, Dhaka as a UX, UI
                Designer. <br />
                <br /> I love to work in User Experience & User Interface
                designing. Because I love to solve the design problem and find
                easy and better solutions to solve it. I always try my best to
                make good user interface with the best user experience. I have
                been working as a Visual designer from.
              </p>
              <Link href="#" className="link btn-style-1 mt-5">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default AboutArea
