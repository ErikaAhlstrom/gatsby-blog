const path = require('path')
const slugify = require('slugify') 



exports.createPages = async ({graphql, actions}) => {

    const {createPage} = actions

    const result = await graphql(`
        query getBlogPosts {
            allContentfulSimpleBlogPost {
                nodes {
                title
                tags {
                    tags
                }
                }
            }
        }

    `)

    console.log(result)

    result.data.allContentfulSimpleBlogPost.nodes.forEach(post => {

        const slug = slugify(post.title, {lower:true})
        createPage({
            path: `/${slug}`,
            component: path.resolve(`src/templates/blogPost-template.js`),
            context: {
                title: post.title,
            }
        })

        post.tags.tags.forEach(tag => {
            const slug = slugify(tag, {lower:true})
            createPage({
                path: `/tags/${slug}`,
                component: path.resolve(`src/templates/tag-template.js`),
                context: {
                    tag: tag,
                }
            })
        })
    })
}