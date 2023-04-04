import React from 'react';
import {BsArrowDownCircle} from 'react-icons/bs';
import  girl22 from "../images/girl22.gif";
import  "../images/jpg/bg2.jpeg";
import "../index.css";
import {Link} from "react-scroll";

const About = () => {
  return (
   
  <div id="about" className="h-screen w-full bg-gradient-to-b from-neutral-200 text-gray-500">

        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row gap-8">
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-800'>
                 About me
                </h2>
                <p className='text-gray-800 py-4 max-w-md'>
                  I am a Full-Stack developer based in Boston. I am a CS graduate from BU. I am very passionate about building  & developing applications & websites. I build WebApps and Websites using MERN Stack. 
                </p>
          
            
            <div classname=' flex flex-row justify-center'>
                <Link  to="portfolio" className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-500 to-blue-500 cursor-pointer'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                        <BsArrowDownCircle size={25} className='ml-1' />
                    </span>
                </Link>

               </div>

               </div>  
               
             
      
                <div>
                <img src={girl22} alt="my-comp" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
             </div>
            
        </div>

    </div>
   
  );
};

export default About;