import React from "react";

import projectReactOne from "../images/reactProjetOne.jpg"
import projectReactTwo from "../images/ReactProjectTwo.jpg"


function TabThree(){
    return(
        <div className="tabThree">
            <a href="">
            <div className="image">
            <img src={projectReactOne} alt="" />
            </div>
            </a>
            <a href="https://portfolio-react-fawn-nu.vercel.app/" target="_blank">
            <div className="image">
            <img src={projectReactTwo} alt="" />     
            </div>
            </a>
        </div>
    )
}
export default TabThree
