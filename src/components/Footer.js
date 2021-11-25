import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer">
            <p>&copy; {new Date().getFullYear()} Erika Ahlström </p>
            <p>
                A blog for plant lovers. Built with {" "} <a href="http://gatsby.com">Gatsby js.</a> 
            </p>
        </footer>
    )
}

export default Footer
