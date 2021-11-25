import React from 'react'
import setupTags from '../utils/setupTags'
import slugify from 'slugify'
import { graphql, Link, useStaticQuery } from 'gatsby'

const TagsList = () => {
    const {
        allContentfulSimpleBlogPost: {nodes: blogPosts}
    } = useStaticQuery(query)
    const newTags = setupTags(blogPosts)
    return (
        <div className="tags-container">
            <hr className="tags-list-line" />
            <div className="tags-list">
            {newTags.map((tag, index) => {
                const [text, value] = tag
                const slug = slugify(text, {lower:true})
                    return <Link key={text} to={`/tags/${slug}`}>{text}</Link>
                })}
            </div>
             <hr className="tags-list-line" />
        </div>
    )
}

export const query = graphql`
  {
    allContentfulSimpleBlogPost {
      nodes {
        tags {
          tags
        }
      }
    }
  }
`

export default TagsList
