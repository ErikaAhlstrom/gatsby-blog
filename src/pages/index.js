import React from "react"
import Layout from "../components/Layout"
import SEO from '../components/SEO'
import { StaticImage } from "gatsby-plugin-image"
import FeaturedBlogPosts from "../components/FeaturedBlogPosts"
export default function Home() {
  return (
    <Layout>
      <SEO title="Home"/>
       <main className="page">
        <header className="hero">
          <StaticImage
          src="../assets/images/hero.jpg"
          alt="Leaves"
          className="hero-img"
          placeholder="traced-svg"
          layout="fullWidth">
          </StaticImage>
          <div className="hero-container">
            <div className="hero-text">
             {/*  <h1>Plant Whisperer</h1>
              <h4>Let's plant something!</h4> */}
            </div>
          </div>
        </header>
        <section className="layout-page">
           <StaticImage
            src="../assets/images/girl-in-chair.jpg"
            alt="Girl reading in a chair."
            className="home-article-img"
            placeholder="traced-svg"
            layout="fullWidth">
          </StaticImage>
          <article>
            <h2>Take a breather!</h2>
            <p>The first thing is to realize that our struggle comes from an attachment. Review the list above and see if any of them apply. What if we could simply notice where we’re feeling attached to something?</p>
          </article>
        </section>
        <FeaturedBlogPosts />
      </main>
    </Layout>
  )
}
