import { useState } from 'react'
import './index.scss'


export default function T(){
    const[mude,setmede] = useState("Sou o Cassio");
    const[desc,setdesc] =useState("?");
    const[desc2,setdesc2] = useState("?");
    const[cor,setcor] = useState("");
    

    function mudar(e){
        let a = e.target.value 
        setmede (a)    }

        function troca(){
            setdesc2(desc)
        }

      function a (e){
        let b = e.target.value
        setdesc(b)
      }

      function mudcor(){
        setcor(cor)
      }
    return(
        <div className='tudo' style={{background:cor}}>
            <h1>{mude}</h1>
           <input onChange={mudar} className='in' type="text" placeholder="Seu nome " />
           <h1>{desc2}</h1>
           <input onChange={a} className='in' type="text" placeholder="Seu nome " />
           <button onClick={troca}>Mudar</button>  
             
           <input onChange={mudcor}  type="color" />
        </div>
    )
}