import React from "react";
import MgProject from "../images/mg.jpg" 
import projectOne from "../images/projectOne.jpg"
import projectTwo from "../images/projectTwo.jpg"
import projectThree from "../images/projectThree.jpg"
import projectFour from "../images/projectFour.png" 



function TabTwo(){
    return(
        <div className="tabTwo">            
             <div className="image">
              <img src={MgProject} alt="" />
            </div>
           <a href="https://medaymen007.github.io/Html-css-js-template-three/" target="_blank">
           <div className="image">
              <img src={projectThree} alt="" />
            </div></a> 
          
            <a href="https://medaymen007.github.io/Html-css-js-template-Four/" target="_blank">
            <div className="image">
              <img src={projectFour} alt="" />
            </div>
            </a>
           
            <a href="https://medaymen007.github.io/HTML-and-CSS-Tamplate-TWO/" target="_blank">
            <div className="image">
              <img src={projectTwo} alt="" />
            </div>
            </a>
            
            <a href="https://medaymen007.github.io/HTML_and_CSS_Template_One/" target="_blank">
            <div className="image">
              <img src={projectOne} alt=""/>
            </div>
            </a>
           
        </div>
    )
}

export default TabTwo;