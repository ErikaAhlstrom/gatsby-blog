import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BlogPostsList from './BlogPostsList'
import TagsList from './TagsList'

const query = graphql`
  {
    allContentfulSimpleBlogPost(sort: {fields: postedAt, order: DESC}) {
      nodes {
        author
        title
        tags {
          tags
        }
        postedAt(formatString: "DD MMMM, YYYY")
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
        id
      }
    }
  }
`

const FeaturedBlogPosts = () => {
    const {
        allContentfulSimpleBlogPost: {nodes: blogPosts}
    } = useStaticQuery(query)
    return (
        <section className="blogPosts-container">
            <TagsList blogPosts={blogPosts}/>
            <BlogPostsList blogPosts={blogPosts}/>
        </section>
    )
}

export default AllBlogPosts

