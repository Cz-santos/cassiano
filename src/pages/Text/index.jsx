import { useState } from 'react'
import './index.scss'


export default function T(){
    const[mude,setmede] = useState("Sou o Cassio")

    function mudar(e){
        let a = e.target.value 
        setmede (a)    }
    return(
        <div className='tudo '>
            <h1>{mude}</h1>
           <input onChange={mudar} className='in' type="text" placeholder="Seu nome " />
        </div>
    )
}