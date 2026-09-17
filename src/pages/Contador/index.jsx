import './index.scss'
import { Link } from 'react-router-dom';

let c = 0;

function cont (){
 c++
 
 alert(c)
}
function menos(){
    c--

    alert(c)
}


export default function conta(){
        return(
            <div className='tudo'>
                <button className='soma' onClick={cont}>+</button>
                <p> {c} </p>
                <button className='menos' onClick={menos}>-</button>

                 <Link to='/'>   </Link>
            </div>

           
        )
}