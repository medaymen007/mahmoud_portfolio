import React from "react";
import { Link } from "react-scroll";
import Btnsection from "./sectionButton"
import "./navBar.css"
import { useState } from "react";
function Navbar(){
   let [display,setDisplay]=useState(false)
      let aff=()=>{
        setDisplay(!display)
      }
    
    return(
        <div className="navBar" >
            <div className="container">
            <div className="logo">AYMEN</div>
          <div className="links">
                <Link href="/">Home</Link>
                <Link  to="SKILLS" spy={true} smooth={true} offset={100} duration={500}>Skills</Link>
                <Link to="PROJECT" spy={true} smooth={true} offset={-100} duration={500}>Project</Link>
                <Link to="SERVICE" spy={true} smooth={true} offset={-100} duration={500}>Service</Link>
                <Link  to="FOOTER" spy={true} smooth={true} offset={-100} duration={500}>Footer</Link>
          </div> 

          <div className="icons">
            <div className="linkedin">
               <a href="https://www.linkedin.com/in/med-aymen-375164256/"><i class="fa-brands fa-linkedin"></i></a>  
           </div>
            <div className="Email">
               <a href="mailto:medaymenm24@gmail.com"><i class="fa-solid fa-envelope"></i></a>  
            </div>

            <div className="github">
             <a href="https://github.com/medaymen007"><i class="fa-brands fa-github"></i></a>  
            </div>
            
          </div>
          <div className="btnBars" onClick={aff} >
          <i class="fa-solid fa-bars"></i>
          </div>
          {display? <Btnsection/>:null }

         </div>
        </div>
    )
}

export default Navbar