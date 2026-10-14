import "./index.scss"



export default function Cab(props){
    return(
        <div className="cabe">
            <h1>{props.titulo ?? "React"}</h1>
        </div>

    );
}