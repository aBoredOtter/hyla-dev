import profile from '/images/Hyla.jpg'
import './AboutMe.css'
import { MagicMotion } from 'react-magic-motion';

function AboutMe() {
    return(
        <MagicMotion>
            <div className="container about-container">  
                <img src={profile} align="left" id="profile"/>
                <h1 className="gradHeading"><span className="gradText">ABOUT ME</span></h1>
                <p id = "description">Hello there! I’m <span style={{color: "#f78de7"}}>Hyla Taylor</span> (she/her) - a programmer, storyteller, and occasional artist. I’m currently pursuing a Bachelors of Science in Computer Science at the University of Victoria. When I’m not studying you can find me taking part in Victoria’s flourishing <span style={{color:"#5BCEFA"}}>tra</span><span style={{color:"#F5A9B8"}}>ns </span>com<span style={{color:"#F5A9B8"}}>mun</span><span style={{color:"#5BCEFA"}}>ity</span>, doing volunteer work, or relaxing at home in the beautiful Quw'utsun Valley.</p>
            </div>
        </MagicMotion>
    )
}

export default AboutMe