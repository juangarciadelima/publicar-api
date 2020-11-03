import api from '../api'
import React, {useState, useEffect} from 'react'

function ListarProdutos(){
    const [produtos,setProdutos] = useState([])

useEffect(async () => {
    const resposta = await api.get('/products/')
    setProdutos(resposta.data.products)
},[])



    return <> 
    <h1>Produtos</h1>

    {produtos.map((produto) => (
    <p key = {produto.name}> Produto : {produto.name}</p>
    ))}
    </>
}


export default ListarProdutos