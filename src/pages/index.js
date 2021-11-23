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
            <h2 className="special-header">Take a breather!</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto aliquid officiis libero velit dicta, assumenda, odio mollitia voluptatibus dolorum alias ut recusandae! Recusandae nostrum modi assumenda voluptatum deleniti dolore.</p>
            <p>Fugiat iusto aliquid officiis libero velit dicta, assumenda, odio mollitia voluptatibus dolorum alias ut recusandae! Recusandae nostrum modi assumenda voluptatum deleniti dolore.</p>
          </article>
        </section>
        <FeaturedBlogPosts />
      </main>
    </Layout>
  )
}
