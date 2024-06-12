import { Route, Router, Routes } from "react-router-dom";
import "./App.css"
import Navbar11 from "./hooks/components/NavBar11";
import TeamComposition from "./components/Team"

function Home(){
  return(
    <Navbar11/>
    
  )
}

function App() {
 
 return (
 
    <body>
      <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/teams" Component={TeamComposition}/>
      </Routes>
         
    </body>
  );
}

export default App;


