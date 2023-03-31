import NavBar from "./components/NavBar";
//import { FaBars,FaTimes } from "react-icons/fa";
import Home from "./components/Home";
import Land from "./components/Land";
import { useState,useEffect } from "react";
import { getQoute } from "./services/quotesApi";



function App() {
const [qt,setQt]=useState('');

useEffect(() => {
  const fetchData = async () => {
    const data =  await getQoute();
   
      //const newdata=data.contents.quotes[0];
      const randomNum=Math.floor(Math.random()*30)
      const newdata=data.quotes[randomNum].quote;
    setQt(newdata);
  
    //console.log(newdata);

  };
  fetchData();
}, []);

  return (
    <div className="App">
      <NavBar  />
      <Land qt={qt} setQt={setQt}/>
       <Home />
      
    </div>
  );
}

export default App;
