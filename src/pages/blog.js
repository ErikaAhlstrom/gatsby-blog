import React from 'react'
import AllBlogPosts from '../components/AllBlogPosts'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Blog = () => {
    return (
        <Layout>
            <SEO title="Blog"/>
            <main className="page">
                <AllBlogPosts />
            </main>
        </Layout>
    )
}

export default Blog
