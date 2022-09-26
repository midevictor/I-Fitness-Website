import React from "react";
import { FaCrown } from "react-icons/fa";
import SectionHead from "../components/SectionHead";
import { programs } from "../data";
import Card from "../UI/Card";
import {Link} from "react-router-dom"
import {AiFillCaretRight} from "react-icons/ai"

function Programs() {
  return (
    <section className="programs">
      <div className="container programs_container">
        <SectionHead icon={<FaCrown />} title="Our Programs" />
     
      <div className="programs_wrapper">
        {programs.map(({ id, icon, title, info, path }) => {
          return (
            <Card className="programs_program" key={id}>
              <span>{icon}</span>
              <h3>{title}</h3>
              <small>{info}</small>
              <Link to={path} className="btn sm">Learn More <AiFillCaretRight/></Link>
            
            </Card>
          );
        })}
      </div>
      </div>
    </section>
  );
}

export default Programs;
