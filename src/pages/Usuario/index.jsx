import './index.scss'
import { Link } from 'react-router-dom'

export default function Usuario(){
    function alerta(){
        alert("Tem Certeza?")
    }
    function mouse(){
        alert("Area de mouse")
    }
    function int(a){
        let novo = a.target.value
        alert(`voce digitou ${novo}`)

    }
    function but(){
        alert("Voce tem certeza?")
    }
    function sair(){
        alert("Voce saiu da area do mouse")
    }
    
    return(
        <div className='tudo'> 
        <div className='Usuario'>
            <h1  className='titulo' onClick={alerta}>Cadastro </h1>
            <div className='email'>
            <input onChange={int} className='in' type="text" placeholder='Nome usuario'></input>
            </div>
            <br />
            <div className='senha'>
            <input onChange={int} className='in' type="password" placeholder='Senha'></input>
            </div>
               <label>
            <input onClick={but} type="radio" name="opcao" />
            Efetivo
          </label>
          <label>
            <input onClick={but} type="radio" name="opcao" />
            Temporario
          </label>
          <label>
            <input onClick={but} type="radio" name="opcao" />
            Estagiario
          </label>
          <label>
            <input onClick={but} type="radio" name="opcao" />
                Jovem  Aprediz
          </label>
        
            <br />

            <div className='sua_area'>
                <select>
                    <option>Selecione</option>
                    <option>Recursos Humanos</option>
                    <option> Administracao</option>
                    <option> Recursos Humanos</option>
                    <option> Tecnologia da Informacao</option>
                </select>

                <div className='mouse'>
                    <div className='a'>
                        <h1 onMouseEnter={mouse} onMouseLeave={sair}>Area de Mouse</h1>
                    </div>
                </div>
            </div>
                   <Link  to="/"> <p className="bot" onClick={but}>Voltar</p></Link>
            </div>
     
            </div>      
    )
}