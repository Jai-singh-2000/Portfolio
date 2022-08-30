import "./intro.scss";

import {AiOutlineDown} from "react-icons/ai";

export default function Intro() {
  return (
    <div className='intro' id="intro">
      
      <div className="left">

        <div className="imgContainer">
            <img src="assets/Jai.png" alt="" />
        </div>

      </div>

      <div className="right">
        
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>Jai <span>Singh</span></h1>
        </div>

        <a href="#portfolio">
          <AiOutlineDown className="arrow-icon"/>
        </a>
      </div>
      
    </div>
  )
}
