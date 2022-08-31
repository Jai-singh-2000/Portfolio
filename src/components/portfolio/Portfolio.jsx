import "./portfolio.scss";
import React, { useState } from "react";
import {featuredPortfolio} from "../../data";
import { useEffect } from "react";

export default function Portfolio() {
  const [data,setData]=useState([]);

  useEffect(()=>{
    setData(featuredPortfolio);
  },[])

  return (
    
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>

      <div className="container">
        
        {data.map((item)=>{
        
        return <React.Fragment key={item.id}>

          <a key={item.link} href={item.link} target="_blank">

            <div className="item">
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
            </div>
          
          </a>
         </React.Fragment>

        })}

      </div>

      
    </div>
  )
}
