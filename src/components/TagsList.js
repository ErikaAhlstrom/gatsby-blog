import React from 'react'
import setupTags from '../utils/setupTags'
import { Link } from 'gatsby'
import slugify from 'slugify'

const TagsList = ({ blogPosts=[] }) => {
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

export default TagsList
