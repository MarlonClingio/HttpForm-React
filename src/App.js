import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom'


import Usuarios from './components/Usuarios/Usuarios'
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario';
import Home from "./components/Home/Home"
import PaginaNaoEncontrada from './components/PaginaNaoEncontrada/PaginaNaoEncontrada';
import DetalhesUsuario from './components/DetalhesUsuario/DetalhesUsuario';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to='/'>Inicio</NavLink>
              </li>
              <li>
                <NavLink to='/usuarios'>Usuários Cadastrados</NavLink>
              </li>
              <li>
                <NavLink to='/adicionar'>Adicionar Usuario</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/usuarios/:id' element={<DetalhesUsuario />} />
            <Route path='/usuarios' element={<Usuarios />} />
            <Route path='/adicionar' element={<AdicionarUsuario />} />
            <Route path='*' element={<PaginaNaoEncontrada />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;