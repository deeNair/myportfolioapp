import NavBar from "./components/NavBar";
import { FaBars,FaTimes } from "react-icons/fa";
import Home from "./components/Home";
import Land from "./components/Land";
import { useState,useEffect } from "react";
import { getQoute } from "./services/quotesApi";



function App() {
const [qoute,setQoute]=useState('');

useEffect(() => {
  const fetchData = async () => {
    const data =  await getQoute();
   
      const newdata=data.contents.quotes[0];
    setQoute(newdata);
    console.log(newdata);
  };
  fetchData();
}, []);

  return (
    <div className="App">
      <NavBar qoute={qoute} setQoute={setQoute} />
      <Land qoute={qoute} setQoute={setQoute}/>
       <Home />
      
    </div>
  );
}

export default App;
