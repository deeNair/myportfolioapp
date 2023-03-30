import React from 'react';
import  compImg2 from "../images/compImg8.jpg";

const Land = (props) => {
  const {qoute}=props;
  return (
    <div>
        <p className=' bg-pink-200 '>
        
        <img src={compImg2} alt="my-comp" className='rounded-2xl mx-auto'/>
        <div className='text-3xl font-signature ml-2 '>
        <h1 >{qoute.quote}</h1>
        </div>
        </p>
    
    </div>
  )
}

export default Land;