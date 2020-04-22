import React from "react";
import './SoftwareSkills.css'
import { skillsSection } from "../../../portfolio";

export default function SoftwareSkills() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline"  name={skills.skillName} title={skills.skillName} >
                <i  onmouseover="bigImg(this)" className={skills.fontAwesomeClassname} aria-hidden="true"></i>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}