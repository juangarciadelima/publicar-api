import api from '../api'
import React, {useState} from 'react'



function CadastraCliente(){
   const [cliente,setCliente] = useState({})

   function onChangeTop(evento){
      const copia = {... cliente}
      copia[evento.target.name] = evento.target.value
      setCliente(copia)

   }

  

    async function Publica(){
      await api.post('/customers/',{firstname : cliente.nome, lastname : cliente.sobrenome})
      .then(resposta => console.log(resposta))
      
   }

   return <> 
    <input onChange={onChangeTop} type="text" name="nome"/>  
    <input onChange={onChangeTop} type="text" name="sobrenome"/>
    <button onClick={Publica} type="button" >Salvar</button>

<p>{cliente.nome}  {cliente.sobrenome}</p>

    
   
   </>
}


export default CadastraCliente