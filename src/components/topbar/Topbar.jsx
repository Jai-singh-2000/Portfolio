import "./topbar.scss";
import {BsFillPersonFill} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";

export default function Topbar({menuOpen,setMenuOpen}) {
  return (

    <div className={"topbar " + (menuOpen && "active")}>

      <div className="wrapper">
        
        <div className="left">
          <a href="#intro" className="logo">Jai.</a>

          <div className="itemContainer">
            <BsFillPersonFill className="icon"/>
            <span>+91 9667201750</span>
          </div>
          <div className="itemContainer">
            <AiOutlineMail className="icon"/>
            <span>jaibhandari804@gmail.com</span>
          </div>
        </div>


        <div className="right">
          <div className="nav-container " onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      
      </div>
    </div>
  )
}
