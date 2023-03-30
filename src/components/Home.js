import React from 'react';
import {BsArrowDownCircle} from 'react-icons/bs';
import  girl2 from "../images/girl2.gif";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-pink-200 text-gray-500">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className='flex flex-col justify-content'>
                <h2 className='text-4xl sm:text-7xl font-bold '>
                    I'm Deepthi Nair
                </h2>
                <p>Lorem ipsum dolor sit amet. Ad perferendis enim vel quibusdam labore est nihil dolor est veritatis voluptatibus non alias illo ut iusto dolorem est consectetur pariatur. Ut vitae soluta 33 deleniti voluptas qui labore consequatur sit quas magni.</p>
          
            
            <div>
                <button>
                    Portfolio
                    <span>
                        <BsArrowDownCircle />
                    </span>
                </button>
                </div>

                </div>

                <div>
                <img src={girl2} alt="my-comp" className='rounded-2xl mx-auto'/>
             </div>
            
        </div>

    </div>
  )
}

export default Home;