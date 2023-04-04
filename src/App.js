import NavBar from "./components/NavBar";
//import { FaBars,FaTimes } from "react-icons/fa";
import About from "./components/About";
import Home from "./components/Home";
import { useState,useEffect } from "react";
import { getQoute } from "./services/quotesApi";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Quotes from "./components/Quotes";
//import "./index.css";
import Footer from "./components/Footer";
import SocialLink from "./components/SocialLink";


function App() {
const [qt,setQt]=useState([]);

useEffect(() => {
  const fetchData = async () => {
    const data =  await getQoute();
   
      //const newdata=data.contents.quotes[0];
      //const randomNum=Math.floor(Math.random()*30)
    //const newdata=data.quotes[randomNum].quote;
    //  const newdata=data.quotes[randomNum];//qt.quote
    setQt(data);

console.log(data)
 };
  fetchData();
}, []);

  return (
    <div className="App">
      <NavBar  />
      <Home />
       <About />
       
         <Portfolio />
         <Skills />
    <SocialLink />
         <Quotes qt={qt} />
         <Contact />
         <Footer />
      
    </div>
  );
}

export default App;
