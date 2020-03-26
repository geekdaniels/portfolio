import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="mt-5 py-5"></div>
    <hr />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center my-5">
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
