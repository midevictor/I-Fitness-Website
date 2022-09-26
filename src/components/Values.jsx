import React from 'react'
import Image from "../images/values.jpg"
import {GiCutDiamond} from "react-icons/gi"
import SectionHead from './SectionHead'
import {values} from "../data"
import Card from "../UI/Card"

const Values = () => {
  return (
    <div>
      <section className="values">
        <div className="container values_container">
          <div className="values_left">
            <div className="values_image">
              <img src={Image} alt=" Values Img" />
            </div>
          </div>
          <div className="values_right">
            <SectionHead icon={<GiCutDiamond/>} title="Our Values" className="values_head"/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad iure vel voluptatem sed laborum sequi.</p>
            <div className="values_wrapper">
              {
                values.map(({id, icon, title, desc}) => {
                  return (
                    <Card className="values_card" key={id}>
                      <span>{icon}</span>
                      <h3>{title}</h3>
                      <small>{desc}</small>
                    </Card>
                  )
                })
              }
            </div>

          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Values
