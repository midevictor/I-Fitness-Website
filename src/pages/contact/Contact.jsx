import React from 'react'
import "./Contact.css"
import HeaderImg from "../../images/header_bg_2.jpg";
import Header from "../../components/Header";

import {MdEmail} from "react-icons/md"
import {FaTwitter} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"



function Contact() {
  return (
  <>
  <Header title='Get In Touch' image={HeaderImg}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, labore.
  </Header>
  <section className="contact">
    <div className="container contact_container">
      <div className="contact_wrapper">
        <a href="mailto:midevcitor90@gmail.com" target="_blank" rel='noreferrer'><MdEmail/></a>
        <a href="mailto:midevcitor90@gmail.com" target="_blank" rel='noreferrer'><FaYoutube/></a>
        <a href="mailto:midevcitor90@gmail.com" target="_blank" rel='noreferrer'><FaTwitter/></a>
      </div>
      </div>
  </section>

  </>
  )
}

export default Contact
