
import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  function alerta(){
    alert("tem certeza?")
  }

  return (
    <div className="App">
      <div className='tudo'>
      <div className='arq1'>
      <Link to ='/c'> <p className='bot'> Melhor jogo</p> </Link>
      </div>
      <Link to='/e'> <p className='bot' onClick={alerta}> Gabarito</p></Link>
      <Link to="/u"> <p className='bot' onClick={alerta}> Usuario</p> </Link>
      <Link to='con'><p className='bot' onClick={alerta}> Contador</p></Link>
      <Link to ='t'> <p className='bot' onClick={alerta}> Texto muda </p></Link>
      
      </div>
    </div>
  );
}

export default App;
