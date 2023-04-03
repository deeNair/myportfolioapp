
import "../index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Quotes = (props) => {
  const {qt}=props;
  //console.log(qt);
  
  const book= qt.quotes ?? [];
//console.log(book );
const randomNum1=Math.floor(Math.random()*30)
const content1= book[randomNum1] ?? [];
//console.log(content1.quote); 

const randomNum2=Math.floor(Math.random()*30)
const content2= book[randomNum2] ?? [];
//console.log(content2.quote); 

const randomNum3=Math.floor(Math.random()*30)
const content3= book[randomNum3] ?? [];
//console.log(content3.quote); 



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
   };

  return (
    <div className="container">
     
    <div className='text-4xl font-signature ml-2 px-20 text-zinc-100 '>
    <Slider {...settings}  >
      <div>
      
      <h1 >{content1.quote}</h1>
      </div> 
      <div>
    <h1>{content2.quote}</h1>
      </div>
      <div>
    <h1>{content3.quote}</h1>
      </div>
      </Slider>
</div>

</div>
  )
}

export default Quotes;