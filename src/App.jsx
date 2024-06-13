import { Route, Router, Routes } from "react-router-dom";
import "./App.css"

import TeamComposition from "./components/Team"

import Home from "./styles/tailwindcss/components/home"
import Navbar11 from "./hooks/components/NavBar11";

import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";


function App() {
 
 return (
 
    <body>
      <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/teams" Component={TeamComposition} />
          <Route path="/NavBar11" Component={Navbar11} />
          <Route path="/PageTwo" Component={PageTwo} />
          <Route path="/PageThree" Component={PageThree} />
        
       
      </Routes>
         
    </body>
  );
}

export default App;


