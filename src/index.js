import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app/App.jsx';
import Contato from './pages/Contato/index.jsx'
import Gabarito from './pages/Gabarito/index.jsx';
import Usuario from './pages/Usuario/index.jsx';
import './pages/Contato/index.scss';
import Num from './pages/Contador/index.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element = {<App/>} ></Route>
      <Route path='/c' element = {<Contato/>}></Route>
      <Route path ='/e' element={<Gabarito/>}></Route>
      <Route path='/u' element={<Usuario/>} ></Route>
      <Route path='con' element ={<Num/>} ></Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


