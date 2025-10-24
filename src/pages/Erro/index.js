import {Link} from 'react-router-dom';
import './erro.css'

function Erro() {
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Ops, Essa página não existe</h2>
            <Link to='/'>Ver filmes</Link>
        </div>
    )
}

export default Erro;