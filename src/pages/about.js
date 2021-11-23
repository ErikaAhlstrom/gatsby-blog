import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { StaticImage } from "gatsby-plugin-image"
import BlogPostsList from '../components/BlogPostsList'

const About = ( {data} ) => {
    return (
        <Layout>
            <SEO title="Contact"/>
            <main className="page">
                <section className="layout-page">
                    <StaticImage
                        src="../assets/images/about.jpg"
                        alt="Leaves"
                        className="hero-img"
                        placeholder="traced-svg"
                        layout="fullWidth">
                    </StaticImage>
                    <article>
                        <h2 className="special-header">Take a breather!</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto aliquid officiis libero velit dicta, assumenda, odio mollitia voluptatibus dolorum alias ut recusandae! Recusandae nostrum modi assumenda voluptatum deleniti dolore.</p>
                        <p>Fugiat iusto aliquid officiis libero velit dicta, assumenda, odio mollitia voluptatibus dolorum alias ut recusandae! Recusandae nostrum modi assumenda voluptatum deleniti dolore.</p>
                    </article>
                    
                </section>
                <section className="featured-blogPosts">
                        <hr className="blog-item-line" />
                        <h5>Up for a cozy read?</h5>
                        <BlogPostsList blogPosts={data.allContentfulSimpleBlogPost.nodes}/>
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
        }
        id
      }
    }
  }
`

export default About
