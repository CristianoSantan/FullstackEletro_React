import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../documents/img/Full Stack logo.PNG';
import './styles.css';

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark d-flex justify-content-center">
            <div class="container">
                <Link class="navbar-brand mr-5" to="/"><img src={logo}
                    alt="logo loja" /></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04"
                    aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample04">
                    <ul class="navbar-nav">
                        <li class="nav-item active mr-5">
                            <Link class="nav-link" to="/produtos">Produtos</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link mr-5" to="/loja">Nossas lojas</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link mr-5" to="/contato">Contato</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;