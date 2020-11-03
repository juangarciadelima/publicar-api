import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ExemploLista from './tema/exemplo-lista'
import ExemploProdutos from './tema/exemplo-cliente'
import CadastraCliente from './tema/cadastra-cliente'
import CadastraProduto from './tema/cadastra-produto'


function App(){
    return <Router>
        <h1>Começo da Tela</h1> 
    <Switch>
        <Route path = "/listaclientes">
            <ExemploLista />
        </Route>
        <Route path = "/listaprodutos">
            <ExemploProdutos />
        </Route>
        <Route path = "/cadastracliente">
           <CadastraCliente />
        </Route>
        <Route path = "/cadastraproduto">
            <CadastraProduto />
        </Route>
    </Switch>
    <h1>Fim da Tela</h1>
    </Router>
}

export default App
