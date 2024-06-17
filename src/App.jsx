import { Route, Router, Routes } from "react-router-dom";
import "./App.css"

import TeamComposition from "./components/Team"

import Home from "./styles/tailwindcss/components/home"
import Navbar11 from "./hooks/components/NavBar11";


import PageThree from "./pages/PageThree";
import GetPokemon from "./api/api-pokemon";


function App() {
 
 return (
 
    <body>
      <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/teams" Component={TeamComposition} />
          <Route path="/NavBar11" Component={Navbar11} />
          <Route path="/PageTwo" Component={GetPokemon} />
          <Route path="/PageThree" Component={PageThree} />
        
       
      </Routes>
         
    </body>
  );
}

export default App;


