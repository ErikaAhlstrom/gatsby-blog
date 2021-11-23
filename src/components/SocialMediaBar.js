import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { Link } from 'gatsby'

const SocialMediaBar = () => {
    return (
        <div className="socialMediaBar">
            <a href="https://facebook.com">
                <BsFacebook className="socialLink"/>
            </a>
            <a href="https://instagram.com">
                <BsInstagram className="socialLink"/>
            </a>
            <a href="https://twitter.com">
                <BsTwitter className="socialLink"/>
            </a>
            
        </div>
    )
}

export default SocialMediaBar
