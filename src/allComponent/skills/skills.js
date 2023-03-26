import React,{useState} from "react";
import "./skills.css"
import htmlImage from "../images/html.png";
import cssImage from "../images/css.png"
import jsImage from "../images/javascript-PhotoRoom.png"
import reactImage from "../images/logo-react-icon.png"
import img90 from "../images/90.jpg"
import img80 from "../images/80.jpg"
import img70 from "../images/70.jpg"
import htmlPng from "../images/htmlpng-PhotoRoom.png"
import cssPng from "../images/csspng-PhotoRoom.png"
import jsPng from "../images/jspng-PhotoRoom.png"
import reactPng from "../images/reactPhoto.png"
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';




function Skills(){
    const js="I master the js language skillfully because it is the basic and perfectly approved language in the web world, and I also used it to work with react.js .";
    const react="3+ years of experience React developer with hands-on experience and designing and implementing highly responsive user intertace components by deploying ReactConcepts. Skilled in translating high-quality designs and code and writing applications Interface code via Javascript and ReactJS workflows I also seek to develop myself every day to the best in this field.";
    const HTML="My first experience with HTML was really fun. I was really greedy when I was learning HTML, I always wanted to learn more and know how to make stuff like a nav bar or something else. I had an amazing experience with HTML ."
    const Css3="I have a great knowledge of css in all its details, transition, flex, grid, animation ... It can be said that I am very proficient in the language ."
    const [items,setItems]=useState();
    const [imagePer,setImage]=useState();
    const [imgPng,setPng]=useState()

    const javascript=()=>{
      setItems(js)
      setImage(img80)
      setPng(jsPng)
    }
    const reactJS=()=>{
        setItems(react)
        setImage(img70)
        setPng(reactPng)

    }
    const html=()=>{
        setItems(HTML)
        setImage(img90)
        setPng(htmlPng)

    }
    const css=()=>{
        setItems(Css3)
        setImage(img90)
        setPng(cssPng)

    }

    let [show,setShow]=useState(true)

    function changeValue(){
        setShow(!show)
    }
    let toggleClass = show ? " Hidden": null 
    return(
       <div className="PRINCIPAL" id="SKILLS">
        <div className="transparent"></div>
        <div className="container">
         <div className="skills" >
         <Fade bottom>
         <div className="displayPart">
                <div className="title">
                    <h2>Our Skills :</h2>
                    <div className="glass">
                    <Flip Left>
                    <span style={{fontSize:"16px"}}>{items}</span>
                   </Flip>
                        <div className="perImage">
                            <img src={imgPng} alt=""  />
                        </div>
                    </div>
                </div>
            </div>       
         </Fade>
         
         <Zoom>
         <div className="allSkills">
                <div className="principal">
                  <p>choose one of themes skills and click it !</p>  
                  <button className="skillsButton" onClick={changeValue}>Show Skills</button>                                    
                  <div className="divAllImage">
                  <Flip cascade>
                    <div className={`js ${toggleClass}`} onClick={javascript}>
                        <img src={jsImage} alt="" />
                    </div>              
                    <div className={`react ${toggleClass}`} onClick={reactJS}>
                        <img src={reactImage} alt="" />
                    </div>     
                    <div className={`css  ${toggleClass}`} onClick={css}>
                        <img src={cssImage} alt="" />
                    </div> 
                             
                    <div className={`html  ${toggleClass}`} onClick={html}>
                        <img src={htmlImage} alt="" />
                    </div>
                 </Flip>
                  </div> 
                </div>    
              </div>
            </Zoom>

           
           

            </div>
          </div>   

       </div>
    )
}

export default Skills
