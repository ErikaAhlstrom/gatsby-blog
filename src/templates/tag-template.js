import React from 'react'
import {graphql} from 'gatsby'
import BlogPostsList from '../components/BlogPostsList'
import Layout from '../components/Layout'
import SEO from "../components/SEO"

const TagTemplate = ({data, pageContext}) => {
    const blogPosts = data.allContentfulSimpleBlogPost.nodes
    return (
        <Layout>
            <SEO title={pageContext.tag}/>
            <main className="page">
                <h2>{pageContext.tag}</h2>
                <div className="tag-blogPosts">
                    <BlogPostsList blogPosts={blogPosts} />
                </div>
            </main>
        </Layout>
    )
}

export const query = graphql`
    query getBlogPostByTag($tag:String) {
        allContentfulSimpleBlogPost(
            filter: {tags: {tags: {eq: $tag}}}
            sort: {fields: title, order: ASC}
        ) {
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

export default TagTemplate
