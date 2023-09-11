import React, { useState, useEffect } from 'react'
import Usuario from '../Usuario/Usuario'

function Usuarios() {

  const [usuarios, setUsarios] = useState([])

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(dados => {
        const usuarios = dados.data.map(usuario => ({
          id: usuario.id,
          nome: usuario.first_name,
          sobrenome: usuario.last_name,
          email: usuario.email
        }))

        setUsarios(usuarios)
      })
  }, [])

  const removerUsuario = usuario => {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {

      fetch(`https://reqres.in/api/users/${usuario.id}`, {
        method: 'DELETE'
      })
        .then(resp => {
          if (resp.ok) {
            setUsarios(usuarios.filter(x => x.id !== usuario.id))
          }
        })
    }
  }

  return (
    <>
      {usuarios.map(usuario => (
        <Usuario key={usuario.id}
          usuario={usuario}
          removerUsuario={() => removerUsuario(usuario)}
        />
      ))}
    </>
  )
}

export default Usuarios