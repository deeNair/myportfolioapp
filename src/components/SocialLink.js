import React from 'react';
import {FaGithub,FaLinkedin} from 'react-icons/fa';
//import {HiOutLineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const SocialLink = () => {
const links=[{
    id:1,
    child:(
        <>
        Linkedin <FaLinkedin size={30} />
        </>
    ),
    href:'https://linkedin.com',
    style:'rounded-tr-md'

}, 

{
    id:2,
child:(
    <>
 Github < FaGithub size={30} />
    </>
),
href:'https://github.com',
style:'rounded-tr-md'

},

{
    id:3,
child:(
    <>
Resume < BsFillPersonLinesFill size={30} />
    </>
),
href:'src/data/resume2.pdf',
style:'rounded-br-md',
download:true

},

];

  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
     <ul>
       { links.map(({id,child,href,style,download})=>(
        <li key={id} 
        className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-800"}>
            <a href={href} 
            className="flex justify-between items-center w-full text-white" 
            download ={download} 
            target="_blank" 
            rel="noreferrer">
              
                {child}
              
            </a>
        </li>
        ))}
     </ul>

    </div>
  )
}

export default SocialLink;