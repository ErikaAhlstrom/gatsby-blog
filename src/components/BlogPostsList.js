import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'


const BlogPostsList = ({ blogPosts=[] }) => {
    return (
        <div className="blogPosts-list">
            {blogPosts.map((post) => {
                const {id, title, image, author, postedAt, tags } = post;
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
                        alt={image.title}
                    />
                    <h5>{title}</h5>
                    <div className="postTagsList">
                        {tags.tags.map((tag, index) => {
                            const slug = slugify(tag, {lower:true})
                            return <Link key={index} to={`/tags/${slug}`}>{tag}</Link>
                        })}
                    </div>
                    <hr className="blog-item-line" />
                    <p> {postedAt} </p>
                    <p className="blogPostAuthor">by {author} </p>
                    </Link>
                )
            })}
        </div>
    )
}

export default BlogPostsList
