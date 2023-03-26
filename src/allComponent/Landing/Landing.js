import React from "react";
import "./Landing.css"
import imageAdmin from "../images/20210912_020718-PhotoRoom-PhotoRoom.png"
import imageCercel from "../images/cercel-PhotoRoom.png"
import imageRomb from "../images/purpelpng-PhotoRoom.png"
import imageBlue from "../images/bluePointure-PhotoRoom.png"
import Typed from "react-typed";
import Fade from 'react-reveal/Fade';

function Landing(){
    return(
            <div className="landing">
                <div className="partiOne">
                <div className="topLine">
                    <Fade left  cascade>
                     <p className="titleH">Hello</p>
                    </Fade>
                </div>
                <Fade right >
                <div className="title">
                    <h1>I'm <span className="multiText"> 
                    <Typed
          strings={[
            "Developer",
            "Coder",
            "Front-end Dev",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
        </span> </h1>
                </div>       
                 </Fade>
                
                </div>
           <div className="partiTwo">
           <div className="text">
          <div>
          <Fade left>
          <div className="paragraphe">
                   <p>"Detail-oriented Front End Developer with more than 5 years
                      experience working with HTML, CSS, Javascript, REACT.JS, and
                      TypeScript. Highly adept at both independent and collaborative
                      projects, with an emphasis on landing page and website
                      development."
                      </p>
               </div>
               </Fade>
               
               <div className="btn">
               <Fade right >
                <a href="./CV_Aymen.pdf"
                download={"CV_Mr_Aymen.pdf"}>
                <button>Download CV</button>
                </a>
               </Fade>
               </div>          
               </div>
       
               
               
           </div>
           <div className="image">
               <div className="me">
                   <img src={imageAdmin} alt="" />
               </div>
               <div className="blue">
               <img src={imageBlue} alt="" />
               </div>
               <div className="cercel">
                   <img src={imageCercel} alt="" />
               </div>
               <div className="rombow">
                   <img src={imageRomb} alt="" />
               </div>
           </div>
           </div>
         </div>
      
         
    )
}
export default Landing
