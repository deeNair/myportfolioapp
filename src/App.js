import NavBar from "./components/NavBar";
import { FaBars,FaTimes } from "react-icons/fa";
import Home from "./components/Home";
import Land from "./components/Land";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Land />
       <Home />
      
    </div>
  );
}

export default App;
