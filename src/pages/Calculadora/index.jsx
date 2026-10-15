import "./index.scss"
import { useState } from "react"
import Cab from'../../components/Cabeex1/index.jsx'

export default function Cal(){
const[n1,setn1] = useState("")
const[n2,setn2] = useState("")
const[resp,setresp] = useState('')

 function soma (){
let som = Number(n1) + Number(n2)
setresp(som)
 }

 function sub(){
    let sum =Number(n1)-Number(n2)
    setresp(sum)
 }



 return(
    <section className="Calculadora">
        <Cab/>
<br>
</br>
    <h2>Calculadora </h2>
    <div className="inpu">
    <div className="inp2">
    <input type="text" value={n1} onChange={(e)=>setn1(e.target.value)} />
    </div>
    <div className="inp2">
    <input type="text" value={n2} onChange={(e)=>setn2(e.target.value)} />
    </div>
     </div>
    <div className="numero">{resp}</div>
    <br />
    <br />
    <div className="Calbot">
    <button className="buc" onClick={soma}> somar</button>
    <button className="buc" onClick={sub}> subtraçao</button>
    </div>
    </section>

 )

}