import "./index.scss"
import { useState } from "react"

export default function Açai() {
    const [tam, settam] = useState("")
    const [Quant, setQuant] = useState(0)
    const[Valor, setValor] = useState(0)
    const{cupom, setcupom} = useState("")




    function tu(){
    let valor = 0

    if(tam==="pequeno"){
        valor= 5.20 * Quant
    }

    if(tam==='medio'){
        valor= 10 * Quant
    }

   if(tam==='grande'){
        valor= 20 * Quant
    }

    if(cupom.toLocaleUpperCase() =="Cassiano"){
        valor = valor * 0.5
    }


    setValor(valor)

    }

    return (
        <div className="Açai">
            <div className="tamanho-açai">
                <select value={tam} onChange={(e) => settam(e.target.value)}>
                    <option value="pequeno"> Pequeno </option>
                    <option value="medio"> medio </option>
                    <option value="grande"> grande </option>
                </select>
            </div>

            <div className="quantidade">
            <input type="number" value={Quant} onChange={(e) => setQuant(e.target.value )}  placeholder="Quantidade"/>
            <input type="text" value={cupom} onChange={(e)=> setcupom(e.target.value)} placeholder="Cupom" />

            <button onClick={tu}> Somar</button>
            </div>
            <p>{Valor}</p>
        </div>
    )

}