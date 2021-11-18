import React, { useState } from 'react'
import { Link } from 'gatsby'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../assets/images/logo.png'

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <nav className="navbar">
            <div className="nav-center">

                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="simply recipes" />
                    </Link>
                    <div className="nav-btn" onClick={() => setShow(!show)}>
                        <GiHamburgerMenu />
                    </div>
                </div>
                <div className={show ? "nav-links show-links" : "nav-links"}>
                    <Link to="/" className="nav-link" activeClassName="active-link" onClick={() => setShow(!show)}>
                        home
                    </Link>
                    <Link to="/blog" className="nav-link" activeClassName="active-link" onClick={() => setShow(!show)}>
                        blog
                    </Link>
                   {/*  <Link to="/tags" className="nav-link" activeClassName="active-link" onClick={() => setShow(!show)}>
                        tags
                    </Link> */}
                    <Link to="/about" className="nav-link" activeClassName="active-link" onClick={() => setShow(!show)}>
                        about
                    </Link>
                    <Link to="/contact" className="nav-link" activeClassName="active-link" onClick={() => setShow(!show)}>
                        contact
                    </Link>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar
