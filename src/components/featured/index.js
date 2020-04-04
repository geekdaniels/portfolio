import React from "react"
import Img from "gatsby-image"

import { Link, graphql, useStaticQuery } from "gatsby"

const FeaturedBlog = () => {
  const data = useStaticQuery(graphql`
    query FeaturedQuery {
      allContentfulBlog(
        limit: 6
        sort: { fields: [createdAt], order: DESC }
        filter: { node_locale: { eq: "en-US" }, featured: { eq: true } }
      ) {
        edges {
          node {
            id
            title
            slug
            content {
              childMarkdownRemark {
                fields {
                  readingTime {
                    text
                  }
                }
              }
            }
            createdAt(formatString: "MMMM Do, YYYY")
            updatedAt(fromNow: true)
            shortDescription
            featuredImage {
              fluid(maxWidth: 1200, quality: 85) {
                src
                ...GatsbyContentfulFluid # use to get responsive image with Gatsby
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className="page-blog-aea mt-5 pt-4 h2-service-area">
      <div className="container mt-5 pt-4">
        <div className="section-title">
          <h2 className="title">Latest articles</h2>
        </div>
        <div className="row mt-5 pt-4">
          {data.allContentfulBlog.edges.map(edge => (
            <div key={edge.node.id} className="col-lg-4 col-sm-6 col-12">
              <div className="single-related-article">
                <div className="img">
                  <Link to={`/blog/${edge.node.slug}`}>
                    {/* <img
                      src={edge.node.featuredImage.fluid.src}
                      alt={edge.node.title}
                      loading="lazy"
                    /> */}
                     <Img
                      fluid={edge.node.featuredImage.fluid}
                      alt={edge.node.title}
                    />
                  </Link>
                </div>
                <div className="content">
                  <p className="date">
                    Published:{edge.node.createdAt} |{" "}
                    {
                      edge.node.content.childMarkdownRemark.fields.readingTime
                        .text
                    }{" "}
                    | Updated: {edge.node.updatedAt}
                  </p>
                  <h4 className="title">
                    <Link
                      to={`/blog/${edge.node.slug}`}
                      class="link text-center"
                    >
                      {edge.node.title}
                    </Link>
                  </h4>
                  <p className="text mb-4">{edge.node.shortDescription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog" className="link btn-style-1 mt-5 mx-auto">
            View All Blog Articles
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBlog
