import React from 'react'
import setupTags from '../utils/setupTags'
import { Link } from 'gatsby'
import slugify from 'slugify'

const TagsList = ({ blogPosts=[] }) => {
    const newTags = setupTags(blogPosts)
    console.log(newTags);
    return (
        <div>
            {newTags.map((tag, index) => {
                const [text, value] = tag
                const slug = slugify(text, {lower:true})
                    console.log(text)
                    return <Link key={text} to={`/tags/${slug}`}>{`| ${text} |`}</Link>
                })}
        </div>
    )
}

export default TagsList
