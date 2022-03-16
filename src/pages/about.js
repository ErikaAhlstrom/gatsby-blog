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
                        <h1>Take a breather!</h1>
                        <p>The first thing is to realize that our struggle comes from an attachment. Review the list above and see if any of them apply. It can be easy to point the finger in someone else’s direction, or to feel bad about things. But what if we could simply notice where we’re feeling attached to something?</p>
                        <p>Try it now — is there something you’ve been frustrated about, avoiding, addicted to? Could you notice the attachment that you have and joyfully release it?

</p>
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
