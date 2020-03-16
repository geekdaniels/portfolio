import React, { Component } from "react"
import Loadable from "@loadable/component"

import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"

import Element_1 from "../../images/home1/photo-1534528741775-53994a69daeb.png"
import Element_2 from "../../images/home1/photo-1545975645-ea9501a81d76.png"

const OwlCarousel = Loadable(() => import("react-owl-carousel"))

class Testimonial extends Component {
  state = {
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      760: {
        items: 2,
      },
    },
  }
  render() {
    return (
      <>
        <section className="testimonial-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <p className="intro">TESTIMONIALS</p>
                  {/* <h2 className="title">Happy Clients Says</h2> */}
                </div>
              </div>
            </div>

            <div className="">
              <OwlCarousel
                className="testimonial-carousel"
                loop
                margin={30}
                nav
                items={2}
                navText={[
                  "<i class='fal fa-long-arrow-left'></i>",
                  "<i class='fal fa-long-arrow-right'></i>",
                ]}
                responsive={this.state.responsive}
              >
                <div className="single-testimonial">
                  <div className="info">
                    {/* <div className="img">
                      <img src={Element_1} alt="" />
                    </div> */}
                    <div className="info-right">
                      <h3 className="name">Omotayo Olaiya</h3>
                      <p className="desg">
                        Agile Project Manager | Product Manager
                      </p>
                    </div>
                  </div>
                  <p className="text">
                    Much more than Daniel Olufemi's adeptness and resilient
                    problem-solving prowess, He is a man of great character. He
                    is a patient man, great listener, excellent communicator,
                    reliable team member and a man with great time management
                    skills. He puts his heart into every task he executes.
                  </p>
                </div>
                <div className="single-testimonial">
                  <div className="info">
                    {/* <div className="img">
                      <img src={Element_2} alt="" />
                    </div> */}
                    <div className="info-right">
                      <h3 className="name">Stephen Enunwah</h3>
                      <p className="desg">Software Engineer @ Interswitch</p>
                    </div>
                  </div>
                  <p className="text">
                    Elite Developer, Goal Driven ... you can be sure of results
                    while working with "Olufemi Oladotun Daniel
                  </p>
                </div>
                {/* <div className="single-testimonial">
                  <div className="info">
                    <div className="img">
                      <img src={Element_1} alt="" />
                    </div>
                    <div className="info-right">
                      <h3 className="name">Martha Sandoval</h3>
                      <p className="desg">Product Designer at CodeNext</p>
                    </div>
                  </div>
                  <p className="text">
                    We are motivated by the satisfaction of our clients. Put
                    your trust in us and share in our growth Asset Management is
                    made up of a team of expert, committed and experienced
                    people with a passion for financial markets. Our goal is to
                    achieve continuous and sustainable growth of our clients.
                  </p>
                </div> */}
                {/* <div className="single-testimonial">
                  <div className="info">
                    <div className="img">
                      <img src={Element_2} alt="" />
                    </div>
                    <div className="info-right">
                      <h3 className="name">Mildred Meyer</h3>
                      <p className="desg">Product Designer at CodeNext</p>
                    </div>
                  </div>
                  <p className="text">
                    We are motivated by the satisfaction of our clients. Put
                    your trust in us and share in our growth Asset Management is
                    made up of a team of expert, committed and experienced
                    people with a passion for financial markets. Our goal is to
                    achieve continuous and sustainable growth of our clients.
                  </p>
                </div> */}
              </OwlCarousel>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Testimonial
