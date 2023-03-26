import React from "react";
import "./service.css";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Service() {
    return ( 
        <div className="service" id="SERVICE">
            <div className="container">
            <div className="partiOne">
            <h2>
            <Zoom left cascade>
            Service
            </Zoom></h2>
            <p>
            <Fade bottom cascade>
            There are skills that I have mastered well, and there are skills that are in the process of being learned to increase knowledge, develop myself, and keep up with new updates every day.
            </Fade>
            </p>
         <a href="./CV_Aymen.pdf"
         download={"CV_Mr_Aymen.pdf"}>
           <Slide bottom>  
           <button>Download CV</button>
           </Slide>
         </a>        
      </div>
        <div className="partiTwo">
             <div className="clnOne">
             <Slide left>
             <div className="dev">
                   <i class="fa-solid fa-code"></i>
                    <h3>Developer</h3>
                    <p>Html, Css , JavaScript, React</p>
              </div>        
              </Slide>

             </div>
             <div className="clnTwo">
             <Slide top>
             <div className="design">
                  <i class="fa-brands fa-figma"></i>
                    <h3>Design</h3>
                    <p>Figma, PhotoShop</p>
                    <p className="Pspe">! In learning</p>
                </div>      
                </Slide>
                
                <Slide bottom>
                <div className="ui">
                  <i class="fa-solid fa-palette"></i>
                  <h3>UI/UX</h3>
                  <p className="Pspe" >! In learning</p>
                </div>
              </Slide> 
             </div>
        </div>
            </div>
      
        </div>
    )
}

export default Service