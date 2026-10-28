import "./index.scss"
import { useState } from 'react'
import Cab from '../../components/Cabeex1/index.jsx'


export default function In() {
    const [qtd, setqtd] = useState()
    const [ent, setent] = useState("")
    const [meia, setmeia] = useState(false)
    const [cas, setcas] = useState("")

    function contas() {

        let entr = qtd * 30

        if (meia == true) {
            entr = entr / 2
        }

        if (cas.toLocaleLowerCase() == 'CASSIANO50') {
            entr = entr * 0.5
        }

        if (cas.toLocaleUpperCase() == 'DEIVID20') {
            entr = entr * 0.2
        }

        if (cas.toLocaleUpperCase() == 'GAB67') {
            entr = entr * 0.33
        }


        setent(entr)
    }




    return (
     <div className="tudo-ing">
        <Cab titulo ='Cinema'/>
            <input type="number" value={qtd} onChange={(e) => setqtd(e.target.value)} placeholder="Quantidade" />
            <input type="text" value={cas} onChange={(e) => setcas(e.target.value)} placeholder="Cupom" />
            <button className="but-ingre" onClick={contas}> Calcular </button>
            <input type="checkbox" value={meia} onClick={(e) => setmeia(e.target.checked)} />
            <p>O valor final é: R${ent}</p>

        </div>

    )
}