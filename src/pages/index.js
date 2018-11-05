import React from 'react'
import { graphql } from 'gatsby'
import Bubble from '../components/bubble'
import IntroSubble from '../components/IntroSubble'
import BlogSubble from '../components/BlogSubble'
import BlogPostSubble from '../components/blogPostSubble'
import NavBar from '../components/NavBar'

const IndexPage = ({ data }) => (
  <Bubble>
    <IntroSubble />
    <NavBar />
    <BlogSubble buildTime = {data.site.buildTimeZone}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogPostSubble
          title={node.frontmatter.title}
          caption={node.frontmatter.caption}
          postDate = {node.frontmatter.postDate}
          editDate={node.frontmatter.latestEditDate}
          link={node.fields.slug}
          editPrefix = {node.frontmatter.datePrefix}
        />
      ))}
    </BlogSubble>
  </Bubble>
)

export const query = graphql`
{
  allMarkdownRemark(sort: { fields: [frontmatter___latestEditDate], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          postDate(formatString: "LLLL")
          latestEditDate(formatString: "LLLL")
          caption
          datePrefix
        }
        fields {
          slug
        }
      }
    }
  }

  site {
    buildTimeZone
  }
}
`

export default IndexPage