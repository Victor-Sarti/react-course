import "./App.css"
import DropDownMenu from "./hooks/components/DropDownMenu";
import { Description, Title } from "./hooks/components/DropDownMenu/style";

function App() {
   const pages = [
{
  Title : "Pages one",
Description : "Lorem ipsum dolor, sit amet consectetur adipisicing."
},
{
  Title : "Pages one",
Description : "Lorem ipsum dolor, sit amet consectetur adipisicing."
},
{
  Title : "Pages one",
Description : "Lorem ipsum dolor, sit amet consectetur adipisicing."
},
{
  Title : "Pages one",
Description : "Lorem ipsum dolor, sit amet consectetur adipisicing."
},
    ]
  
 return (
 
    <body>
    
        <DropDownMenu pages={pages}/>
    </body>
  );
}

export default App;


