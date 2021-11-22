import React from 'react'
import AllBlogPosts from '../components/AllBlogPosts'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Blog = () => {
    return (
        <Layout>
            <SEO title="Blog"/>
            <main className="page">
                <h1>Blog Page</h1>
                <AllBlogPosts />
            </main>
        </Layout>
    )
}

export default Blog
