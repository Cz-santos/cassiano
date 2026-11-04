import "./index.scss"
import { useState } from "react"
import Cab from "../../components/Cabeex1/index.jsx"

export default function Exaçai() {

    const [resu, setresu] = useState(0)
    const [qant, setqant] = useState(1)
    const [tam, settam] = useState("")
    const [chek, setchek] = useState("")
    const [cupom, setcupom] = useState("")


    function a() {
        let valor = 0;

        if (tam === "pequeno") {
            valor = 10 * qant
        }

        if (tam === "medio") {
            valor = 15 * qant
        }

        if (tam === "grande") {
            valor = 20 * qant
        }

        if (chek == true) {
            if (cupom === "e") {
                valor = valor * 0.90
            }
        }



        setresu(valor)



    }


    return (
        <div className="Exaçai">
            <Cab titulo='Açai' />
            <div className="qunt">
                <input type="Number" placeholder="quantidade" value={qant} onChange={(e) => setqant(e.target.value)} />
            </div>
            <div className="Tamanho-ex">
                <select value={tam} onChange={(e) => settam(e.target.value)}>
                    <option value="pequeno"> Pequeno </option>
                    <option value="medio"> Medio </option>
                    <option value="grande"> Grande </option>
                </select>
            </div>


            <div className="cupom">
                <label>
                    <input type="checkbox" value={chek} onChange={(e) => setchek(e.target.checked)} />
                </label>
                <input type="text" placeholder="Cupom" value={cupom} onChange={(e) => setcupom(e.target.value)} />
            </div>

            <button onClick={a}>valor</button>
            <p>{resu}</p>
        </div>

    )
}