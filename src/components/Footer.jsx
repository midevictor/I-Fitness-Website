import React from 'react'
import {Link} from 'react-router-dom'
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
import Logo from "../images/logo.png"

function Footer() {
  return (
    <footer>
      <div className="container footer_container">
        <article>
          <Link to="/" className='logo'>
            <img src={Logo} alt="logo"/>
          </Link>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis recusandae unde harum obcaecati! Labore, excepturi debitis rerum ab id illum.</p>
          <div className="footer_socials">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookF/></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter/></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram/></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><FaYoutube/></a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>

        <article>
          <h4>Insights</h4>
          <Link to="/about">Blogs</Link>
          <Link to="/plans">Case Studies</Link>
          <Link to="/trainers">Events</Link>
          <Link to="/gallery">Communities</Link>
          <Link to="/contact">FAQs</Link>
        </article>

        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact</Link>
          <Link to="/contact">Support</Link>
        </article>
      </div>
      <div className="footer_copyright">
        <small>2022 EHIZ_DEV &copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer