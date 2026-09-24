import './index.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function Contador() {
    const [conta, setconta] = useState(0);

    function menos() {
        setconta(conta - 1)
    }
    
    function mais() {
        setconta(conta + 1)
    }

    return (
        <div className='tudo'>
            <button className='soma' onClick={mais}><p className='te'>+</p></button>
            <p>{conta}</p>
            <button className='menos' onClick={menos}><p className='ti'>-</p></button>

            <Link to='/'>   </Link>
        </div>


    )
}