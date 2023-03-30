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
    console.log(data);
    setQoute(data);
  };
  fetchData();
}, []);

  return (
    <div className="App">
      <NavBar qoute={qoute} setQoute={setQoute} />
      <Land />
       <Home />
      
    </div>
  );
}

export default App;
