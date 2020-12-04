import React from 'react';
import {Link} from 'react-router-dom';
// import logo from '../documents/img/Full Stack logo.PNG';
import './styles.css';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark d-flex justify-content-center">
            <div className="container">
                <Link className="navbar-brand mr-5" to="/"><img src="img/Full Stack logo.PNG"
                    alt="logo loja" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04"
                    aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav">
                        <li className="nav-item active mr-5">
                            <Link className="nav-link" to="/produtos">Produtos</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link mr-5" to="/loja">Nossas lojas</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link mr-5" to="/contato">Contato</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link mr-5" to="/pedido">Pedidos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;