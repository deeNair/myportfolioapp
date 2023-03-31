import React from 'react';
import  compImg2 from "../images/compImg8.jpg";

function Land(props){
const {qt}=props;
//console.log(qt.quotes[0].quote);

  return (
    <div>
        <p className=' bg-black '>
        
        <img src={compImg2} alt="my-comp" className='rounded-2xl mx-auto' />
        <div className='text-6xl font-signature ml-2 px-4 text-gray-500'>
      <h1 >{qt}</h1>
       

  </div>
        </p>
    
    </div>
  )
}

export default Land;