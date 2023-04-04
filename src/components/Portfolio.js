import React from 'react';
import  "../css/portfolio.css";
import {portfolio} from "../data/portfolio.js";



import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';


const Portfolio = () => {
  
  
  return (
    <div id="portfolio" className=' bg-gradient-to-b w-full text-gray-800 md:h-screen'> 
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
    
    <p className='text-5xl font-bold inline border-b-4 border-gray-800'>Portfolio</p>
    <p className='text-2xl  font-bold border-gray-800'>some of my projects</p>
    <div className='flex flex-row justify-center gap-4 mt-4'> 
   {portfolio.map((el,i)=> (

   <MDBCard key={i} className='main  '>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay '>
        <MDBCardImage src={el.image} fluid alt='...' className='bg-image  rounded-md duration-200 hover:scale-105 '/>
      </MDBRipple>
      <MDBCardBody className='bod px-16 py-4 shadow-md rounded-lg shadow-black hover:scale-105 duration-200 '>
        <MDBCardTitle className='font-bold '>{el.title}</MDBCardTitle>
        <MDBCardText>{el.skills}</MDBCardText>
        <MDBCardText>{el.desc}</MDBCardText>
        <MDBBtn className='mx-2 px-5 ' color='tertiary'  rippleColor='light' href={el.github}>code</MDBBtn>
      </MDBCardBody>
    </MDBCard>))}
    </div>
    </div>
    
    </div>
  );
}

export default Portfolio;