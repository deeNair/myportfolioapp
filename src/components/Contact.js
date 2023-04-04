import React from 'react';
import desk from "../images/jpg/desk.png";

const Contact = () => {
  return (
    <div id="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        
    <div className='pb-8 '>
      <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Contact</p>
      <p className='py-6'>send me a message</p>
    </div>

    <div className='flex justify-center items-center'>

      <form action='https://getform.io/f/0eb98aef-fa78-4cd3-9358-97e0cfbc4930' method="POST" className='flex flex-col w-full
    md:w-1/2'>
     <input type="text" name="name" placeholder='enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'  />
     <input type="text" name="email" placeholder='enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'  />

     <textarea name="message" rows="10" className='p-2 bg-transparent placeholder="enter your message" border-2 rounded-md text-white focus:outline-none '></textarea>
     <button className='text-white bg-gradient-to-b from-zinc-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 '>Lets talk</button>
    </form>
    <div className='flex flex-row '>
    <img src={desk} alt="my-comp" className='rounded-2xl  scale-x-75 ml-60 '/>
    </div>
   
   </div>
 
    </div>
   </div>
  )
}

export default Contact;