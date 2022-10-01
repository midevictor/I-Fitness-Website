import React from "react";
import "./About.css";
import HeaderImg from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import Header from "../../components/Header";

function About() {
  return (
    <>
      <Header title="About Us" image={HeaderImg}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
        temporibus eos nulla a nemo tempora repellendus. At, voluptatem quo
        excepturi quos vero, a sequi minima ipsum numquam eum labore sint!
      </Header>

      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="" />
          </div>

          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
              facilis? Adipisci eaque facere aperiam obcaecati explicabo
              repudiandae iure nisi vero tenetur omnis eius veritatis fugit quo
              ducimus, magnam et similique.
            </p>
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            autem ab blanditiis cum vero temporibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            dolorem?
          </p>
          </div>
         
        </div>
      </section>


      <section className="about_story">
        <div className="container about_vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
              facilis? Adipisci eaque facere aperiam obcaecati explicabo
              repudiandae iure nisi vero tenetur omnis eius veritatis fugit quo
              ducimus, magnam et similique.
            </p>
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            autem ab blanditiis cum vero temporibus.
          </p>
          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt="" />
          </div>

        </div>
      </section>



      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="" />
          </div>

          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
              facilis? Adipisci eaque facere aperiam obcaecati explicabo
              repudiandae iure nisi vero tenetur omnis eius veritatis fugit quo
              ducimus, magnam et similique.
            </p>
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            autem ab blanditiis cum vero temporibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            dolorem?
          </p>
          </div>
         
        </div>
      </section>
    </>
  );
}

export default About;
