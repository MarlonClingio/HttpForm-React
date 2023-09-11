import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import './DetalhesUsuario.css'

function DetalhesUsuario() {

  const { id } = useParams()

  const [usuario, setUsuario] = useState({})

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then(resp => resp.json())
      .then(dados => {
        if (dados.data) {
          setUsuario({
            id: dados.data.id,
            nome: dados.data.first_name,
            sobrenome: dados.data.last_name,
            email: dados.data.email,
            foto: dados.data.avatar
          })
        }
      })
  }, [id])

  if (usuario.nome !== undefined) {
    return (
      <div className="detalhes">
        <h1>{usuario.nome} {usuario.sobrenome}</h1>
        <img src={usuario.foto} alt={usuario.nome} className="avatar" />
        <p>{usuario.email}</p>
        <Link to="/usuarios">Voltar</Link>
      </div>
    )
  }

  return <>
    <h1>Usuario Não Encontrado!</h1>
    <Link to="/usuarios">Voltar</Link>
  </>
}

export default DetalhesUsuario