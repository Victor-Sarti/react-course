import "./App.css"

import Banner from "./components/Banner"

import camera from "./assets/images/svg/camera-svgrepo-com.svg"
import card from "./assets/images/svg/card-holder-svgrepo-com.svg"
import phone from "./assets/images/svg/cell-phone-svgrepo-com.svg"
import earphone from "./assets/images/svg/earphone-svgrepo-com.svg"
import gas from "./assets/images/svg/gas-station-svgrepo-com.svg"
import transportation from "./assets/images/svg/transportation-svgrepo-com.svg"




function App() {
  return (
<body> 
    <div className="card">
        <h1>React</h1>
        <p> Front-End JavaScript</p>
      </div>
    <div className="all-banner" >  

     <Banner title ="OI" description="Você quer um quebrado?" image={camera}/>
     <Banner title ="SALVEE" description="?" image={card}/>
     <Banner title ="MARCHA" description="PA ONDE ?" image={phone}/>
     <Banner title ="PRA LÁ" description="Você vai ?" image={earphone}/>
     <Banner title ="VOU PASSAR NO POSTO" description="Eu vou, você vai comigo ?" image={gas}/>
     <Banner title ="TO INDO DE CAMINHÃO" description="To indo te buscar ai" image={transportation}/>
  
  </div>
</body>
    );
}

export default App;
