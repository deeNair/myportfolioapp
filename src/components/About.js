import React from 'react';
import {BsArrowDownCircle} from 'react-icons/bs';
import  girl22 from "../images/girl22.gif";
import  "../images/jpg/bg2.jpeg";
import "../index.css";

const About = () => {
  return (
   
  <div id="about" className="h-screen w-full bg-gradient-to-b from-neutral-200 text-gray-500">

        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row gap-8">
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-800'>
                  Little About me
                </h2>
                <p className='text-gray-800 py-4 max-w-md'>I want to tell you about my life. i'll tell you some thing i do with my daughter and my husband. First things about my daughter, i give her bath and give her yummy food and i get her ready for school until my class starts,my daughter is kind.she loves to dance and sing and draw.my daughter's brithday is on
                may 9th.

                </p>
          
            
            <div>
                <button  className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                        <BsArrowDownCircle size={25} className='ml-1' />
                    </span>
                </button>
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