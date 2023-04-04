import React from 'react'
import { skillsData } from '../data/skillsData';
import Marquee from "react-fast-marquee";
import { skillsImage } from '../data/skillsImage';
//import { ThemeContext } from '../pages/ThemeContext';
import  "../css/skills.css";

const Skills = () => {

    const skillBoxStyle = {
        backgroundColor: '#303030',
        boxShadow: `0px 0px 30px white`
    }

    return (
        <div id="skills" className='skills' style={{backgroundColor: '#303030'}}>
            <div className='skillsHeader' >
                <h2 style={{color: 'whitesmoke'}}>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className='skill--scroll'>
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: 'white'}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
  )
}

export default Skills;