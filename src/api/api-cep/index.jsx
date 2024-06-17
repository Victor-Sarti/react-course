import React, { useState } from "react";
import axios from "axios";

export default function GetCep() {
    const [cep, setCep] = useState(null)
    const [address, setAddress] = useState(null)

    console.log(cep, "cep")
    console.log(address, "addres")

    async function handleAddres() {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
            setAddress(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className=" flex flex-col">

            <div className=" flex flex-col items-center justify-center gap-4">
                <h1 className="text 4x1 text-blue-600"> Busque seu Cep Aqui</h1>

                <input placeholder="Digite seu Cep"
                    type="number"
                    className="p-2 border-solid border-blue-800 rounded-md"
                    onChange={(e) => setCep(e.target.value)} />

                <button type="button" onClick={handleAddres}>Buscar</button>

            </div>
            {
                address &&

                <div className="flex flex-col items-center gap-2 mt-10">
                    <p>`Rua:{address.logradouro}</p>
                    <p>`DDD:{address.ddd}</p>
                    <p>`Bairro:{address.bairro}</p>
                    <p>`Cidade{address.localidade}</p>
                </div>
            }
        </div>
    )
}