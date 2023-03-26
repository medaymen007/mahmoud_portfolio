import React from "react";
import "./footer.css"
import waves from "../images/waves-PhotoRoom.png"
import Fade from 'react-reveal/Fade';

function Footer (){
    return(

        <div className="all" id="FOOTER">
            <div className="waves">
                <img className="wavesOne" src={waves} alt="" />
                
            </div>
         <div className="footer">
         <Fade left>
         <div className="iconContact">
                <a href="/"  >
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/in/med-aymen-375164256/" target="_blank">
                    <i class="fa-brands fa-linkedin"></i> 
                </a>
                <a target="_blank" href="https://github.com/medaymen007" >
                    <i class="fa-brands fa-github"></i>                
                </a>
                <a href="mailto:medaymenm24@gmail.com">
                   <i class="fa-solid fa-envelope"></i>                
                </a>
                <a href="/" >
                   <i class="fa-brands fa-instagram"></i>
                </a>
            </div>    
                </Fade>
            
            <div className="iconInfo" >
            <Fade left cascade>
          <div>
          <div className="local">
                 <i class="fa-solid fa-location-dot"></i>
                 <p>Tunisia-tunis</p>
              </div>                          
              <div className="phone">
                 <i class="fa-solid fa-phone"></i>
                 <p>+216 58120448</p>
               </div>

          </div>
        </Fade>

               
            </div>
            <div className="copyright">
                <p>&copy; 2022 | All Right Reserved</p>
            </div>
</div>
           
        </div>
    )
}

export default Footer 