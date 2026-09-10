import "./index.scss"
import { Link } from "react-router-dom"



export default function Gabarito(){
function alerta(){
    alert("errooooo")
}
function susto(){
    alert("Ahhhh")
}
function teste (e){
    let novo=e.target.value
    alert(` Voce digitou ${novo}`)
}
    return(
        <div className="teste">
            <h1 onClick={alerta}> Gabarito</h1>
             <p onMouseMove={susto}> Responda abaixo</p>
             <div className="test">
            <input onChange={teste} className="bord" type="text" placeholder="Seu nome " />
            </div>
            <h2> seu curso</h2>

            <select>
                <option>Informatica</option>
                <option> Adm</option>
                <option> Comunicaçao visual</option>
                <option> Ingles</option>
            </select>
            
            <h2> sua sala</h2>
                     <label>
            <input type="radio" name="opcao" />
            a
          </label>
          <label>
            <input type="radio" name="opcao" />
            b
          </label>
          <label>
            <input type="radio" name="opcao" />
            c
          </label>
          <label>
            <input type="radio" name="opcao" />
            d
          </label>
            <Link to="/"> <p className="butao" onChange={alerta}>Voltar</p></Link>
             </div>

    )
}