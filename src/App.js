
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  function alerta(){
    alert("OIEEEEE")
  }
  function mommy(){
    alert("Esse cassiopéia")
  }
  return (
    <div className="App">
      <div className='tudo'>
      <h1 className='time' onMouseMove={mommy}>Melhor time do Brasil!!!!</h1>
      <Link to ='/c'> <img src='./assets/images/palm.webp' width={200} alt='ola'></img> </Link>
      <Link to='/e'> <p className='bot' onClick={alerta}> Gabarito</p></Link>
      <Link to="/u"> <p className='bot'> Usuario</p> </Link>
      
      </div>
    </div>
  );
}

export default App;
