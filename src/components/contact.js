import React from "react"

const Contact = () => (
  <>
    <section className="iha-contact innerpage-hero-area" id="_iha"></section>
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
            <label htmlFor="bot">Don't fill this out, human</label>
            <input name="bot" id="bot" />
          </div>
          <div className="contact-form">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1">
                <div className="row">
                  <div className="col-lg-12 col-12">
                    <div className="section-title">
                      <p className="intro">CONTACT ME</p>
                      <h2 className="title">Let’s Chat</h2>
                      <p className="text">
                        The seemingly impersonal contact form below will deliver
                        your message personally into my inbox. I usually reply
                        within 24 hours.
                      </p>
                      <p className="text">
                        Not a fan of contact forms? Feel free to send me an
                        email. I’ll tell you my email address in a second. <span class="text-warning">olufemidaniels07@gmail.com</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="contact-input-box">
                      <label htmlFor="fullname" className="small">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        placeholder="Full name"
                        required
                        autocomplete="name"
                      />
                    </div>
                    {/* <div className="contact-input-box">
                      <input type="text" name="organization_name" placeholder="Organization Name" />
                    </div> */}
                    {/* <div className="contact-input-box">
                      <input type="text" name="budget" placeholder="Budget" />
                    </div> */}
                    <div className="contact-input-box">
                      <label htmlFor="email" className="small">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email address"
                        required
                        autocomplete="email"
                      />
                    </div>

                    <div className="contact-input-box">
                      <label htmlFor="phone_number" className="small">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="contact-input-box">
                      <label htmlFor="phone_number" className="small">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        placeholder="Phone number"
                        required
                        autocomplete="tel"
                      />
                      <label htmlFor="phone_number" className="small">
                        This is important, I'll like to call you! So we can speed thing up...
                      </label>
                    </div>

                    {/* <div className="contact-input-box">
                      <input type="text" name="timeframe" placeholder="Date or Timeframe" />
                    </div> */}

                    <div className="contact-input-box">
                      <input
                        className="btn-style-1"
                        type="submit"
                        value="Submit Request"
                      />
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
