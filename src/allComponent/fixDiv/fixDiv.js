import React from "react";
import "./fixDiv.css"

function FixBar(){
    return(
        <div className='fixBar'>

          <div className="linkedin">
            <a target="_blank" href="https://www.linkedin.com/in/med-aymen-375164256/" rel="noreferrer"><i class="fa-brands fa-linkedin"> <div className="space"></div> <p>Linkedin</p></i></a>  
          </div>

          <div className="Email">
            <a target="_blank" href="mailto:medaymenm24@gmail.com" rel="noreferrer"><i class="fa-solid fa-envelope"> <div className="space"></div> <p>E-mail</p></i></a>  
          </div>

          <div className="github">
            <a target="_blank" href="https://github.com/medaymen007" rel="noreferrer"><i class="fa-brands fa-github"> <div className="space"></div> <p>Github</p> </i></a> 
          </div>

      </div>
    )
}

export default FixBar