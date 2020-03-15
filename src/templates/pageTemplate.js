import React from 'react'


import Layout from '../components/layout'
import Header from '../components/Header'
// sample header
import pic04 from '../assets/images/pic04.jpg'

import SEO from "../components/seo"

export default function Template({ data, }) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <Header title={frontmatter.headerTitle} subtitle={frontmatter.headerSubtitle} />
            <div id="main">
                <section id="content" className="main">
                    <span className="image main"><img src={pic04} alt="" /></span>
                    {/* inject content */}
                    <div
                    className="page-content"
                    dangerouslySetInnerHTML={{ __html: html}}
                    />
                </section>
            </div>
        </Layout>
)}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        headerTitle
        headerSubtitle
      }
    }
  }`