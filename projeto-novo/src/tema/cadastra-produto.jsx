import api from '../api'
import React, { useState } from 'react'


function CadastraProduto() {
    const [produto, setProduto] = useState({})

    function onChangeUm(evento) {
        const copia = { ...produto }
        copia[evento.target.name] = evento.target.value
        setProduto(copia)
    }

    async function publica(){
     await api.post('/products/', {name : produto.nome, price : produto.preco})
     .then(resposta => console.log(resposta))
    }

    return <>

        <input onChange={onChangeUm} type="text" name="nome" />
        <input onChange={onChangeUm} type="number" name="preco" />
        <button type="button" onClick={publica}>Publicar</button>
        <p>{produto.nome}</p>
        <p>{produto.preco}</p>
    </>

}


export default CadastraProduto