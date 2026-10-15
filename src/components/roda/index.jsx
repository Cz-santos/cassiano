import './index.scss'

export default function Rodapé(props){
return(
<div className='test'>
    <h1> {props.titulo ?? "Roda Pé"}</h1>
    </div>
)
}