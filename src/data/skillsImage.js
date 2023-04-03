
import html from '../images/svg/html.svg'
import css from '../images/svg/css.svg'
import javascript from '../images/svg/javascript.svg'
import react from '../images/svg/react.svg'
//import bootstrap from '../assets/svg/skills/bootstrap.svg'
//import mongoDB from '../assets/svg/skills/mongoDB.svg'
//import mysql from '../assets/svg/skills/mysql.svg'
//import tailwind from '../assets/svg/skills/tailwind.svg'
//import vitejs from '../assets/svg/skills/vitejs.svg'
//import git from '../assets/svg/skills/git.svg'
//import wordpress from '../assets/svg/skills/wordpress.svg'
//import figma from '../assets/svg/skills/figma.svg'
//import java from '../assets/svg/skills/java.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
       
        case 'html':
            return html;
        
        case 'css':
            return css;
       
        case 'javascript':
            return javascript;
       
        case 'react':
            return react;
        
        
       
        /*case 'bootstrap':
            return bootstrap;
       
        case 'mongodb':
            return mongoDB;
        
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'git':
            return git;
        case 'java':
                return java;
        
        case 'wordpress':
            return wordpress;
        
        case 'figma':
            return figma;*/
       
        default:
            break;
    }
}