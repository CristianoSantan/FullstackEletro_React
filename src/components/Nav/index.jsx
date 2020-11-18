import React from 'react';
import logo from '../img/Full Stack logo.PNG';
import './styles.css';

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark d-flex justify-content-center">
            <div class="container">
                <a class="navbar-brand mr-5" href="index.php"><img src={logo}
                    alt="logo loja" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04"
                    aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample04">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active mr-5">
                            <a class="nav-link" href="produtos.php">Produtos</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link mr-5" href="loja.php">Nossas lojas</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link mr-5" href="contato.php">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;