import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { StaticImage } from "gatsby-plugin-image"
import FeaturedBlogPosts from '../components/FeaturedBlogPosts'
import SocialMediaBar from '../components/SocialMediaBar'

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
                  <div>
                    <article>
                        <h2 className="special-header">Take a breather!</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto aliquid officiis libero velit dicta, assumenda, odio mollitia voluptatibus dolorum alias ut recusandae! Recusandae nostrum modi assumenda voluptatum deleniti dolore.</p>
                        <p>Fugiat iusto aliquid officiis libero velit dicta, assumenda, odio mollitia voluptatibus dolorum alias ut recusandae! Recusandae nostrum modi assumenda voluptatum deleniti dolore.</p>
                    </article>
                    <SocialMediaBar position="center"/>
                  </div>
                </section>
                <FeaturedBlogPosts />
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
