import "./skills.scss";
import {skillData} from "../../skillData";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Testimonials() {
  const [skills,setSkills]=useState([]);

  useEffect(()=>{
    setSkills(skillData);
  },[])

  return (
    <div className='skills' id="skills">
      <h1>Skills & Education</h1>

      <div className="container">
        
        <div className="left">

          <div className="inside-left">

          {
            skills.map((item)=>{
              return <React.Fragment key={item.name }>

                <div className="skillBox">
                    <img src={item.img} alt={item.name} />
                </div>
              </React.Fragment>

            })
          }
            
            
           
          </div>

        </div>
        

        <div className="right">
          <div className="container">

            <div className="edu">
              <h3>Bachelor of Computer Application</h3>
              <p><span>Indira Gandhi National Open University - 68%</span></p>
              <p><span className="year">2018-2021</span></p>
            </div>
            <div className="edu">
              <h3>AISSCE, CBSE, Class XII</h3>
              <p><span>Bharat Mata Saraswati Bal Mandir - 76%</span></p>
              <p><span className="year">2016-2018</span></p>
            </div>
            <div className="edu">
              <h3>AISSCE, CBSE, Class X</h3>
              <p><span>Bharat Mata Saraswati Bal Mandir - 9.6cgpa</span></p>
              <p><span className="year">2014-2016</span></p>
            </div>

          </div>
        
        </div>

      </div>
    </div>
  )
}
