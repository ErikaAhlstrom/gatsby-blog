import React from 'react'
import MainBlogPostList from '../components/MainBlogPostList'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import TagsList from '../components/TagsList'
import { graphql, Link, useStaticQuery } from 'gatsby'

const Blog = () => {
    const {
        allContentfulSimpleBlogPost: {nodes: blogPosts}
    } = useStaticQuery(query)
    return (
        <Layout>
            <SEO title="Blog"/>
            <main className="page">
              <section className="blog-page">
                <TagsList blogPosts={blogPosts}/>
                <MainBlogPostList blogPosts={blogPosts}/>
              </section>
            </main>
        </Layout>
    )
}

export const query = graphql`
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
          title
        }
        id
      }
    }
  }
`

export default Blog
