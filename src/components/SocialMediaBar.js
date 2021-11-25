import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { Link } from 'gatsby'

const SocialMediaBar = ({ position = null }) => {
    return (
        <div className={`socialMediaBar ${position ? "center" : ""}`}>
            <a href="https://facebook.com">
                <BsFacebook size={25} className="socialLink"/>
            </a>
            <a href="https://instagram.com">
                <BsInstagram size={25} className="socialLink"/>
            </a>
            <a href="https://twitter.com">
                <BsTwitter size={25} className="socialLink"/>
            </a>
            
        </div>
    )
}

export default SocialMediaBar
