


export default function facebook(){
    return(
<div className=" w-screen h-screen  bg-gray-facebook flex items-center justify-center flex-col md:flex-row ">
    
    <div className="w-580 pr-8  text-center md:text-left" >
    <h1 className="text-blue-facebook font-bold text-5xl"> Facebook</h1>
        <h2 className=" text-3xl text-black ">O facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida </h2>
    </div>
    
    
    <div className=" bg-white-facebook p-8 w-380 rounded-md flex justify-center items-center flex-col shadow-lg mt-8">
       <input placeholder="Email ou Telefone" className=" bg-gray-custum rounded-sm  border w-full  h-45 mb-8  pl-8" type="text" />
       <input placeholder="Senha" className="input-facebook" type="text" />
        <button className=" h-45 w-full bg-blue-facebook rounded-md text-white-facebook"> Entrar</button>
        <a className="text-blue-facebook cursor-pointer mt-8" href="">Esqueceu a senha</a>
        <hr className=" w-full m-8  border-gray-facebook border"/>
        <button className=" bg-green-facebook  h-45 rounded-md text-white-facebook px-8">Criar uma nova Conta </button>
    </div>
       
    </div>


    );
}