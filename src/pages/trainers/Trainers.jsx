import React from 'react'
import "./Trainers.css"
import HeaderImg from "../../images/header_bg_5.jpg";
import Header from "../../components/Header";
import {trainers} from "../../data"
import Trainer from '../../components/Trainer';

import {FaTwitter} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"



function Trainers() {
  return (
  <>
  <Header title='Our Trainers' image={HeaderImg}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, labore.
  </Header>
  <section className="trainers">
    <div className="container trainers_container">
     {
      trainers.map(({id, image, name, job, socials}) => {
      return(
        <Trainer key={id} image={image} name={name} job={job} socials={
          [
            {icon: <BsInstagram/>, link: socials[0]},
            {icon: <FaLinkedin/>, link: socials[1]},
            {icon: <FaTwitter/>, link: socials[2]},
            {icon: <FaYoutube/>, link: socials[3]},
          ]
        } />

      )
      })
     }
      </div>
  </section>
  </>
  )
}

export default Trainers
