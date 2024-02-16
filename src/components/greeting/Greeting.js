import React from "react";
import "./Greeting.css";
import SocialMedia from "../sections/socialMedia/SocialMedia";
import Button from "../sections/button/Button";
import { greeting } from "../../portfolio";
import {Fade} from "react-reveal";
// import emoji from "react-easy-emoji";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px" >
    <div className="greet-main" id="greeting" >
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div className="greeting-container">
            <h1 className="greeting-text">
              {" "}
              {greeting.title}
              {" "}
              {/* <span className="wave-emoji">{emoji("👋")}</span> */}
            </h1>
            <p className="greeting-text-p subTitle">
              I am Ahmed Abdulkarim and welcome to my portfolio <br/> 
              <br/> 
              <b>Software Developer | Former Chemist | Diverse Experience </b> 
              <p> Currently working as a support engineer resolving bugs & defects, and providing solutions to clients</p>
              <p> Seeking oppurtunities to perpetually learn and grow, lets connect</p>
              
              {/* <b>Mission statement:</b> Sowing the seeds of my potential in fallowed opportunities <br/> 
              <b>Vision statement:</b> Earnestly tilling each opportunity with the fertilizer accrued from past experiences and the water precipitating from my efforts <br/> */}
              <a className="resume-link" href="https://quipcode.github.io/resume/" target="_blank">
            <span className="resume-link-text" >Resume</span>
            </a>
               
               </p>
            <SocialMedia />
            
            
         
          </div>
        </div>
        <div className="greeting-image-div">
  
          <img alt="ahmed green"  src={require("../../assets/images/croppedPortraitGreen.jpg")} ></img>
        </div>
      </div>
    </div>
    </Fade>
  );
}





