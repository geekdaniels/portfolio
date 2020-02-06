import React from "react"

const Contact = () => (
  <>
    <section className="iha-contact innerpage-hero-area" id="_iha">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="innerpage-hero-content">
              <h2 className="title">Get an estimate</h2>
              <p className="text">
                Fill out this simple form. Our team will contact you promptly to
                discuss next steps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="contact-form-area mt-5 pt-5" id="_cfa">
      <div className="container">
        <form
          method="post"
          action=""
          name="contact"
          data-netlify="true"
          netlify-honeypot="bot"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="d-none">
            <label>Don't fill this out, human</label>
            <input name="bot" />
          </div>
          <div className="contact-form">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <div className="row">
                  <div className="col-lg-5 col-12">
                    <div className="section-title">
                      <p className="intro">CONTACT ME</p>
                      <h2 className="title">Let’s Chat</h2>
                      <p className="text">
                        Fill this out so we can learn more about you and your
                        needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="contact-input-box">
                      <input type="text" name="fullname" placeholder="Full name" />
                    </div>
                    <div className="contact-input-box">
                      <input type="text" name="organization_name" placeholder="Organization Name" />
                    </div>
                    <div className="contact-input-box">
                      <input type="text" name="budget" placeholder="Budget" />
                    </div>
                    <div className="contact-input-box">
                      <input type="text" name="phone_number" placeholder="Phone number" />
                    </div>
                    <div className="contact-input-box">
                      <input
                        className="btn-style-1"
                        type="submit"
                        value="PROJECT ESTIMATE"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="contact-input-box">
                      <input type="email" name="email" placeholder="Email address" />
                    </div>
                    <div className="contact-input-box">
                      <input type="text" name="timeframe" placeholder="Date or Timeframe" />
                    </div>
                    <div className="contact-input-box">
                      <textarea name="message" placeholder="Message"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </>
)

export default Contact
