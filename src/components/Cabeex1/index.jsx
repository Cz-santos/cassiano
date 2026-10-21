import "./index.scss"



export default function Cab(props){
    return(
        <div className="cabe" 
        style={{ backgroundColor: props.cor ?? "#14ce5b" 
        , color: props.cort ?? "black"}}> 
            <h1>{props.titulo ?? "React"}</h1>
        </div>

    );
}