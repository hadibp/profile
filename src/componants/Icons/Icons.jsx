import React from 'react'
import {FaGithub , FaFacebook ,FaTwitter ,FaLinkedin ,FaInstagram , FaWhatsapp }from "react-icons/fa"
// import { IconContext } from 'react-icons/lib'
// import {MdCode} from "react-icons/md"
import './Icons.css'

function Icons() {

    
    return (
        <div className="icons-body">
            <ul className="icons">
                <li><a href="https://www.facebook.com/me/" target="_blank"><FaFacebook/></a></li>
                <li><a href="https://www.instagram.com/a___hadi__/" target="_blank"><FaInstagram/></a></li>
                <li><a href="https://github.com/hadibp" target="_blank"><FaGithub/></a></li>
                <li><a href="https://twitter.com/AbdulHa73514701" target="_blank"><FaTwitter/></a></li>
                <li><a href="https://www.linkedin.com/in/abdul-hadi-bp-213131208/" target="_blank"><FaLinkedin/></a></li>
                <li><a href="#" target="_blank"><FaWhatsapp/></a></li>
                {/* <li><a href="#"><MdCode/></a></li> */}
            </ul>
        </div>
    )
}

export default Icons
