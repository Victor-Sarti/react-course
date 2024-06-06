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

       {/* <Navbar logo= "Logo" link= "Link one" link2= "Link Two" link3= "Link Three" link4= "Link Four" button1= "Button" button= "Button" />  */}
       
       <Accordion title = "Quem Somos ?" description = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae voluptate aliquam vel rem enim accusamus, sit delectus commodi aperiam illo harum quis ea eligendi minus nisi non cupiditate ab?lorem1"/> 
       
       <Accordion title = "Contatos" description = "Lorem ipsum dolor sit amet consectetur adipisicing elit Accusantium, esse. " /> 
      
       <Accordion title = "AAAAAAAAAAAA" description = "Lorem ipsum avdja vaseaf vai svdjic sposiv dolor sit amet consectetur adipisicing elit Accusantium, esse. " /> 
       
    </body>
  );
}

export default App;


