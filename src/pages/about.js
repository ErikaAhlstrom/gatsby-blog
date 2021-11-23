import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { StaticImage } from "gatsby-plugin-image"
import AllBlogPosts from "../components/AllBlogPosts"

const About = () => {
    return (
        <Layout>
            <SEO title="Contact"/>
            <main className="page">
                <section className="contact-page">
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

            </main>
        </Layout>
    )
}

export default About
