import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"

const PrivacyPage = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy - Olufemi Oladotun Daniel"
        desc="Here's what data this website collects and who gets to see it When you browse this website, following tools collect data about your activity: Google Analytics | HotJar. The collected data doesn't personally or directly identify you in any way. I'm the only person who gets to look at this data."
      />
      {/* 
      <AboutMe /> */}

      <section className="h2-about-area mt-5 pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12 text-center">
              <div className="h2-about-content mt-5 pt-5">
                <div className="section-title text-center">
                  <h2 className="title text-uppercase text-center">
                    Privacy Policy
                  </h2>
                </div>
                <h4 class="my-5">
                  Here’s what data this website collects and who gets to see it.
                </h4>

                <p className="text-left my-3">
                  When you browse this website, following tools collect data
                  about your activity:
                </p>

                <ul className="text-left">
                  <li className="my-4">Google Analytics</li>
                  <li className="my-4">HotJar</li>
                </ul>

                <p className="text-left my-3">
                  The collected data doesn’t personally or directly identify you
                  in any way.
                </p>

                <p className="text-left my-3">
                  I’m the only person who gets to look at this data, and I do
                  that to see how you’re liking my content and what I can do for
                  you to like it even more.{" "}
                </p>

                <p className="text-left my-3">
                  Hate the idea of Google Analytics collecting your data?
                  Install and activate{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://tools.google.com/dlpage/gaoptout?hl=en"
                    className="link color"
                  >
                    this add-on
                  </a>{" "}
                  in your browser, and it will be like visiting my website
                  wearing an invisibility cloak.
                </p>

                <h4 class="my-5">When you sign up</h4>

                <p className="text-left my-3">
                  When you sign up for my updates or download a PDF file, the
                  only thing I’ll ask you for is your email address, which will
                  forever stay between us and won’t be shared with anyone else.
                </p>

                <p className="text-left my-3">
                  I’ll use your email address to send you the emails I told you
                  I would before you signed up. If you get fed up with them at
                  some point, you can unsubscribe any time by using an
                  “unsubscribe” link at the bottom of each email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PrivacyPage
