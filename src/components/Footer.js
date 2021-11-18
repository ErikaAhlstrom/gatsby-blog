import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer">
            <p>&copy; {new Date().getFullYear()} 
                <span> Simply A Blog</span>. Built with {" "} <a href="http://gatsby.com">Gatsby js</a> </p>
        </footer>
    )
}

export default Footer
