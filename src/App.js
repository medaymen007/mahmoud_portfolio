import './App.css';
import "./css/mainProSite.css"
import "./css/nrml_lize.css"
import Navbar from './allComponent/navBar/navBar';
import FixBar from './allComponent/fixDiv/fixDiv';
import Landing from './allComponent/Landing/Landing';
import Skills from './allComponent/skills/skills';
import Projects from './allComponent/projects/project';
import Service from './allComponent/service/service';
import Footer from './allComponent/footer/footer';
function App() {
    return ( <div className = "App" > 
            <FixBar/>
            <Navbar/>
            <Landing/>
            <Skills/>
            <Projects/>   
            <Service/>    
            <Footer/>     
            
        </div>
    );
}

export default App;