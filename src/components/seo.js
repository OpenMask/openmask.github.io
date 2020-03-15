import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import {useSiteMetadata} from '../hooks/use-site-metadata'

function SEO({ description, lang, meta, title }) {
  const siteMeta = useSiteMetadata()

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMeta.title}`}
      meta={[
        {
          name: `description`,
          content: siteMeta.description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: siteMeta.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMeta.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: siteMeta.description,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
