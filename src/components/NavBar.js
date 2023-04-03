import React from 'react';
import {Link} from 'react-scroll';
//import Scroll from "react-scroll";

function NavBar(){
return (
    <div>
    <div className='flex justify-between items-center w-full h-20 px-4 text-zinc-100 bg-zinc-800 fixed'>
        
        <div>
            <h1 className='text-5xl font-signature ml-2'>ds</h1>
            </div>
            <ul className='flex'>

        {/*  {navlink.map((li)=>{
            return(
            <li key={li.id} className="px-4 cursor-pointer capitalize font-medium text-zinc-100 hover:scale-105 duration-200">{li.link}</li>

            )

          })}*/}

                <li  className="px-4 cursor-pointer capitalize font-medium text-zinc-100 hover:scale-105 duration-200">
                  <Link activeClass="active" smooth spy to="home">
                    Home
                    </Link>
                    </li>

                <li className="px-4 cursor-pointer capitalize font-medium text-zinc-100 hover:scale-105 duration-200">
                  <Link activeClass="active" smooth spy to="about">
                    About
                  </Link>
                </li>

                <li className="px-4 cursor-pointer capitalize font-medium text-zinc-100 hover:scale-105 duration-200">
                  <Link activeClass="active" smooth spy to="portfolio">
                    Portfolio
                  </Link>
                  </li>

                <li className="px-4 cursor-pointer capitalize font-medium text-zinc-100 hover:scale-105 duration-200">
                  <Link activeClass="active" smooth spy to="skills">
                    Skills
                  </Link>
                </li>

                <li  className="px-4 cursor-pointer capitalize font-medium text-zinc-100 hover:scale-105 duration-200">
                  <Link activeClass="active" smooth spy to="contact">
                  contact
                  </Link>
                  </li>

           </ul>
             
        </div>
       
        
</div>  
  )
}

export default NavBar