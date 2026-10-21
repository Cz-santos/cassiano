import "./index.scss"
import Cab from "../../components/Cabeex1"
import axios from "axios"
import { useState } from "react"


export default function Cep() {
    const [cep, setcep] = useState('');
    const [endereço, setendereço] = useState();

    async function buscacep() {
        let rl = `https://viacep.com.br/ws/${cep}/json/`

        let resposta = await axios.get(rl)
        let ddos = resposta.data;
        let mens = ddos.logradouro + "/" + ddos.bairro + "/" + ddos.localidade + "/" + ddos.uf

        setendereço(mens)
    }

    return (
            <div className='api_tudo'>
                <div className='busca'>
                    <h1>Buscar Cep:</h1>

                    <input type="text" value={cep} onChange={(e) => setcep(e.target.value)} />
                    <div className='butao-api'>
                        <button onClick={buscacep} >buscar</button>
                    </div>

                    <h2>Resultados:</h2>
                    <div className='cep1'>
                        <p className='re'>{endereço}</p>
                    </div>
                </div>
            </div>


    )
}