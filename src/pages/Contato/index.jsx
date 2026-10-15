import { Link } from "react-router-dom"
import './index.scss'
import Cab from "../../components/Cabeex1/index"

export default function Contato(){
    return(
        <div className="Gab">
             <Cab/>
            <h1 className="jogo">Melhor Jogo!!!!!</h1>
            <Link to = "/"><img src="./assets/images/far.jpg" alt="ola"></img></Link>
        </div>
    )
}