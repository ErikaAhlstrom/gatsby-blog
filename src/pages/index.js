import React from "react"
import Layout from "../components/Layout"
import SEO from '../components/SEO'

export default function Home() {
  return (
    <Layout>
      <SEO title="Home"/>
      <main className="page">
        <h1>Home Page</h1>
      </main>
    </Layout>
  )
}
