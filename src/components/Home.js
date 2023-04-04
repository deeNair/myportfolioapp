import React from 'react';
//import  compImg2 from "../images/compImg8.jpg";
import video from '../images/dee.mp4'
//import "../index.css";

function Home(){

//console.log(qt.quotes[0].quote);

  return (
    <div id="home" className='pt-20'>
        <p className=' bg-gray-800 rounded-2xl '>
        <video src={video} autoPlay muted  />
        </p>
    
    </div>
  )
}

export default Home;

// <img src={video} alt="my-comp" className='rounded-2xl mx-auto' />