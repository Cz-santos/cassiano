import { Link } from "react-router-dom"
import './index.scss'


export default function Contato(){
    return(
        <div className="tudo">
            <h1 className="jogo">Melhor Jogo!!!!!</h1>
            <Link to = "/"><img src="./assets/images/far.jpg" alt="ola"></img></Link>
        </div>
    )
}