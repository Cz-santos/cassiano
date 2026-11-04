import "./index.scss"



export default function Cab(props){
    return(
        <div className="cabe" 
        style={{ backgroundColor: props.cor ?? "#ce1414ff" 
        , color: props.cort ?? "black"}}> 
            <h1>{props.titulo ?? "React"}</h1>
        </div>

    );
}