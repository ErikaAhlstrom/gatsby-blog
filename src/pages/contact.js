import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import SocialMediaBar from '../components/SocialMediaBar'
import FeaturedBlogPosts from '../components/FeaturedBlogPosts'


const Contact = ( {data} ) => {
    return (
        <Layout>
            <SEO title="Contact"/>
                <main className="page">
              <section className="layout-page">
                  <article className="contact-info">
                      <SocialMediaBar />
                      <h3>Want to get in touch?</h3>
                      <p>To send a message, please use the form! </p>
                      <p>While we can't respond to every message, we will attempt to respond within 24 hours. </p>
                  </article>
                  <article >
                    <form className="form contact-form" action="https://formspree.io/f/mleaqowj" method="POST">
                      <div className="form-row">
                          <label htmlFor="name">Your name</label>
                          <input type="text" name="name" placeholder="name" id="name"></input>
                      </div>
                      <div className="form-row">
                          <label htmlFor="email">Your email</label>
                          <input type="text" name="email" placeholder="email" id="email"></input>
                      </div>
                      <div className="form-row">
                          <label htmlFor="message">Your message</label>
                          <textarea name="message" placeholder="message" id="message"></textarea>
                      </div>
                      <button type="submit" className="btn block">Submit</button>
                    </form>
                  </article>
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

export default Contact
