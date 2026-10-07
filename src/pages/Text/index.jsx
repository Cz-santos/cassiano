import { useState } from 'react'
import './index.scss'


export default function T(){
    const[mude,setmede] = useState("Sou o Cassio");
    const[desc,setdesc] =useState("?");
    const[desc2,setdesc2] = useState("?");
    

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

    
    return(
        <div className='md'>
            <h1>{mude}</h1>
           <input onChange={mudar} className='in' type="text" placeholder="Seu nome " />
           <h1>{desc2}</h1>
           <input onChange={a} className='in' type="text" placeholder="Seu nome " />
           <br />
           <button className='oi' onClick={troca}>Mudar</button>  
           
        </div>
    )
}