import React, { useState } from "react";
import "./projects.css"
import TabOne from "./tapOne";
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';



function Projects (){
     const [allTab,setAllTab]=useState(TabOne)
     let tabO=()=>{
      setAllTab(TabOne)
     }
     let tabT=()=>{
        setAllTab(TabTwo)
      }
     let tabTh=()=>{
      setAllTab(TabThree)
     }
    
    return(
        <div className="projects" id="PROJECT">
          <div className="container">
          <div className="partiOne">
          <Fade bottom big cascade>
          <div>
          <h2>Project</h2>
          <p>These are some examples of the work that I have done, some of which are made with react and some with html, css and js. You can also find all the projects on my github account.</p>
          <div className="tabsButton">
                  <button className="left" onClick={tabO} >Tab 1</button>
                  <button className="center" onClick={tabT}>Tab 2</button>
                  <button className="right" onClick={tabTh}>Tab 3</button>
                </div>        
                  </div>
         </Fade>   
              </div>
          </div>
          <Flip top>
          <div className="partiTwo">
              {allTab}
              </div>         
              </Flip>
        </div>
    )
}

export default Projects