import React from 'react';

function NavBar(){



  /*const list= qoute.map((el)=>{
    return(<p>
      {el.contents.map((e)=>{
        return(
          <h1>e.quote</h1>)
       
      })}
    </p>);
  })
  */
//console.log("here" +qoute);

  return (
    <div>
    <div className='flex justify-between items-center w-full h-20 px-4 text-gray-500 bg-black fixed'>
        
        <div>
            <h1 className='text-5xl font-signature ml-2'>ds</h1>
            </div>
            <ul className='flex'>
                <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">Home</li>
                <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">About</li>
       
                  </ul>
             
        </div>
       
        
</div>  
  )
}

export default NavBar