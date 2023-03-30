import React from 'react';

function NavBar(props){

  const {qoute}=props;
  /*const list= qoute.map((el)=>{
    return(<p>
      {el.contents.map((e)=>{
        return(
          <h1>e.quote</h1>)
       
      })}
    </p>);
  })
  */
console.log("qoute" +qoute.contents.quotes[0]);

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-gray-500 bg-pink-200 fixed '>
        
        <div>
            <h1 className='text-5xl font-signature ml-2'>{qoute.baseurl}</h1>
            </div>
            <ul className='flex'>
                <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">Home</li>
       
                  </ul>
        
        </div>
  )
}

export default NavBar