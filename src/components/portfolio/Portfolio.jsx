import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import React, { useState } from "react";
import {featuredPortfolio,reactPortfolio,webPortfolio} from "../../data";
import { useEffect } from "react";

export default function Portfolio() {
  const [selected,setSelected]=useState("featured")
  const [data,setData]=useState([]);

  const list=[
    {
      id:"featured",
      title:"Featured"
    },
    {
      id:"react",
      title:"React"
    },
    {
      id:"web",
      title:"Web"
    },
  ]

  useEffect(()=>{
    switch(selected)
    {
      case "featured":setData(featuredPortfolio);
      break;
      
      case "react":setData(reactPortfolio);
      break;

      case "web":setData(webPortfolio);
      break;

      default:setData(featuredPortfolio);
    }

  },[selected])

  return (
    
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=>{
          return <PortfolioList key={item.title} title={item.title} id={item.id} active={selected===item.id} setSelected={setSelected}/>
        })}
      </ul>


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
