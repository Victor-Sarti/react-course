import "./App.css"

import Layout from "./components/Layout";
import camisa from "./assets/images/svg/camisa.svg"


function App() {
  return (
<body> 
    <div className="card">
        <h1>React</h1>
        <p> Front-End JavaScript</p>
      </div>
   
   <Layout tags="CHEGOU" title="NOVA CAMISA DO SANTOSFC " description="Santos FC, Umbro e Charlie Brown Jr. estão juntos novamente para mais uma collab. Nesta segunda-feira (13) ocorre o lançamento de uma nova camisa que envolve as três marcas. O modelo chega em edição limitada e numerada.

A camisa entre Santos FC e CBJR é uma homenagem à banda, que nasceu na cidade do litoral paulista. Serão apenas 1.992 unidades do modelo, alusão ao ano de criação do grupo musical.

“Santos FC, Umbro e Charlie Brown Jr. tem uma parceria histórica. O lançamento de uma camisa tão especial e limitada mostra essa importância. Tenho certeza que será mais um grande sucesso de vendas”, afirmou o presidente Marcelo Teixeira.

O modelo é tingido na cor preta e acompanha tons de dourado. Na parte central da camisa está escrito o nome da banda. Com gola em V, a peça limitada ainda acompanha uma aplicação emborrachada de um skatista próximo ao escudo do Santos FC e da Umbro, além de grafismos do mesmo skatista por toda a camisa." image={camisa} /> 
  </body>
    );
}

export default App;
