import "./App.css"
import Accordion from "./hooks/components/accordion";
import Navbar from "./styles/css-modules/components/Navbar";
// import {Titulo} from "./styles/css.modulo/components/Titulo"
// import Headline from "./styles/styled-component/components/Headline";

import Square from "./styles/styled-component/components/Square";



function App() {
  return (
    <body>
     {/* <Square borderStyle = "dotted" colorStyle = ""/>
      */}
      {/* <Titulo/>
      <Headline/> */}

      {/* <Navbar logo= "Logo" link= "Link one" link2= "Link Two" link3= "Link Three" link4= "Link Four" button1= "Button" button= "Button" /> */}
      <Accordion/>
    </body>
  );
}

export default App;


