import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'


const BlogPostsList = ({ blogPosts=[] }) => {
    return (
        <div className="blogPosts-list">
            {blogPosts.map((post) => {
                const {id, title, image, author, postedAt } = post;
                const pathToImage = getImage(image)
                const slug = slugify(title, {lower: true})
                return (
                    <Link 
                        to={`/${slug}`}
                        className="blogPost"
                        key={id}
                    >
                    <GatsbyImage
                        image={pathToImage}
                        className="blogPost-img"
                        alt={title}
                    />
                    <h5>{title}</h5>
                    <p>{postedAt} </p>
                    <p>{author} </p>
                    </Link>
                )
            })}
        </div>
    )
}

export default BlogPostsList
