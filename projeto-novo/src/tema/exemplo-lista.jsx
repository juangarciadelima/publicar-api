import api from '../api';
import React, {useState, useEffect} from 'react'


function Listar(){
  const [clientes,setClientes] = useState([])
  useEffect(async () => {
    const resposta = await api.get('/customers/')
    setClientes(resposta.data.customers)
}
       
  , [])



  return <> 
  <h1>Clientes</h1>

{clientes.map((cliente) => (

<p key={cliente.customer_url}> Nome : {cliente.firstname} {cliente.lastname}</p>
))}
  </>
}

export default Listar