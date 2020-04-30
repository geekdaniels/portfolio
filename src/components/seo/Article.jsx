import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"

const Article = ({ publication_date, modification_date }) => (
  <Helmet>
    <meta property="article:publisher" content="Olufemi Oladotun Daniel" />
    <meta property="article:published_time" content={publication_date} />
    <meta property="article:modified_time" content={modification_date} />
    <meta property="og:updated_time" content={modification_date} />
  </Helmet>
)

export default Article

Article.propTypes = {
  publication_date: PropTypes.string.isRequired,
  modification_date: PropTypes.string.isRequired,
}
