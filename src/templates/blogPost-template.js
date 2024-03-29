import { renderRichText } from "gatsby-source-contentful/rich-text"
import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import slugify from 'slugify'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import TagsList from "../components/TagsList"


const BlogPostTemplate = ({ data, pageContext }) => {

    console.log(data.contentfulSimpleBlogPost.content);
    
        const {
            title,
            author,
            content: {raw: {content}},
            image,
            postedAt,
            tags: {tags}
            } = data.contentfulSimpleBlogPost

        const pathToImage = getImage(image)
/* 
        const options = {
            renderNode: {
                [BLOCKS.GATSBY_IMAGE_DATA]: node => {
                    console.log("NODE", node);
                }
            }
        } */
        const post = data.contentfulSimpleBlogPost.content
        const output =  renderRichText(post) 

    return (
        <Layout>
        <SEO title={pageContext.title} />
            <main className="page">
                <section className="blog-page">
                    <TagsList />
                    <div className="fullBlogPost">
                        <h1>{title}</h1>
                        <hr className="blog-item-line" />
                            <p>{postedAt}</p>
                            <p className="blogPostAuthor">by {author} </p>
                        <div className="blogPost-page">
                                <GatsbyImage
                                    image={pathToImage}
                                    alt={image.title}
                                    className="about-img"
                                />
                        </div>
                    <div >{output}</div>
                    </div>
                </section>
           

            </main>
        </Layout>
    )
}

export const query = graphql`
  query getSingleBlogPost($title: String) {
    contentfulSimpleBlogPost(title: {eq: $title}) {
        title
        author
        content {
        raw
        }
        postedAt(formatString: "DD MMMM, YYYY")
        tags {
            tags
        }
        image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            title
        }
    }
}
`

export default BlogPostTemplate
