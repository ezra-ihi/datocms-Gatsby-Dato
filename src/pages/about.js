import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const About = ({ data: { about } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={about.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{about.title}</h1>
        <p className="sheet__lead">{about.subtitle}</p>
        <p className="sheet__lead updated">{about.simpleNewField}</p>
        <div className="sheet__gallery">
          <Img fluid={about.photo.fluid} />
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: about.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
      <div className="slider">
        <h1>{about.boxes.title}</h1>
      </div>
    </article>
  </Layout>
)

export default About

export const query = graphql`
  query AboutQuery {
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      simpleNewField
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
      boxes {
        title
        introNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
