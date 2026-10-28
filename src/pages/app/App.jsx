
import './App.scss';
import { Link } from 'react-router-dom';
import Cab from'../../components/Cabeex1/index.jsx'
import Rodapé from '../../components/roda/index.jsx'
import Menu from"../../components/menu/index.jsx"

function App() {
  function alerta(){
    alert("tem certeza?")
  }

  return (

    <div className="App">
      <Cab titulo ='React Pagina Primaria'/>
        <Menu/>
      <div className='tudo'>
      <div className='arq1'>
      <Link to ='/c'> <p className='bot'> Melhor jogo</p> </Link>
      </div>
      <Link to="/u"> <p className='bot' onClick={alerta}> Usuario</p> </Link>
      <Link to='con'><p className='bot' onClick={alerta}> Contador</p></Link>
      <Link to ='t'> <p className='bot' onClick={alerta}> Texto muda </p></Link>
      <Link to = 'ca' ><p className='bot' onClick={alerta}> Calculadora</p></Link>
       <Link to = "/in" ><p className='bot' onClick={alerta}> Cinema</p></Link>
    </div>

    <Rodapé/>
    </div>
  );
}

export default App;
