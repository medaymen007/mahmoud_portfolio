import React from "react";
import { useState } from "react";
import "./navBar.css"
function Btnsection(){
      
  let [addClassName,setAdd]=useState("")

       let delet=()=>{
          setAdd("cls")
       }

    return(
        <div className={`btnSection ${addClassName}` } >
            <div className="partiOne">
                <div className="home">
                  <i class="fa-solid fa-house"></i>
                  <p>Home</p>
                </div>
                <div className="skl">
                  <i class="fa-solid fa-trophy"></i>
                  <p>Skills</p>
                </div>
                <div className="lnd">
                  <i class="fa-solid fa-spinner"></i>
                  <p>Landing</p>
                </div>
            </div>
            <div className="partiTwo">
                <div className="srv">
                 <i class="fa-sharp fa-solid fa-briefcase"></i>
                 <p>Service</p>
                </div>
                <div className="projects">
                 <i class="fa-sharp fa-solid fa-image"></i>
                 <p>Projects</p>
                </div>
                <div className="contact">
                <i class="fa-regular fa-address-card"></i>
                 <p>Contact</p>
                </div>
            </div>
            <div className="close" onClick={delet} >
            <i class="fa-solid fa-x"></i>
            </div>
        </div>
    )
}
export default Btnsection