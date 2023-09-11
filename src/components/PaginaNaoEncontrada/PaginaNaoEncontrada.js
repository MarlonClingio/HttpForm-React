import React from "react"
import logo from './logo512.png'
import './PaginaNaoEncontrada.css'

function PaginaNaoEncontrada() {
  return (
    <div className="notFund">
      <div>
        <h1>404: NOT FOUND</h1>
        <p>Pagina não encontrada...</p>
      </div>
      <img src={logo} alt="logo" />
    </div>
  )
}

export default PaginaNaoEncontrada