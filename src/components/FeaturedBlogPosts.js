import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BlogPostsList from './BlogPostsList'

const query = graphql`
  {
    allContentfulSimpleBlogPost(sort: {fields: postedAt, order: DESC} filter: {featured: {eq: true}}) {
      nodes {
        author
        title
        tags {
          tags
        }
        postedAt(formatString: "DD MMMM, YYYY")
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          title
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
        <section className="featured-blogPosts">
          <hr className="blog-item-line" />
          <h2 >Featured blogposts</h2>
          <BlogPostsList blogPosts={blogPosts}/>
        </section>
    )
}

export default FeaturedBlogPosts

