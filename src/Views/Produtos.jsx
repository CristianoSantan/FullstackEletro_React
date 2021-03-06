// Dependencias e biblioteca.
import React from 'react';
import CardProdutos from '../components/CardProdutos/CardProdutos.jsx';

export default class Produtos extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            db: [],
        });
        this.exibirProdutos();
        this.exibirCategoria = this.exibirCategoria.bind(this);
        this.exibirTodos = this.exibirTodos.bind(this);
    }

    // -------------------------------------   Api Produtos
    exibirProdutos() {
        fetch("http://localhost/RECODE_Pro/GUERREIRO%20JEDI/REACT/FullStackEletro/fseletro/src/Backend/Api_Produtos.php")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    db: responseJson
                });
            })
    }

    //  -----------------------------------   Exibição por categoria 
    exibirCategoria(categoria) {
        let elementos = document.getElementsByClassName('boxProduto');

        for (var i = 0; i < elementos.length; i++) {

            if (categoria === elementos[i].id) {
                elementos[i].style = "";
            }
            else {
                elementos[i].style = "display:none";
            }
        }
    }
    //  -----------------------------------   Exibir todos
    exibirTodos() {
        let elementos = document.getElementsByClassName('boxProduto');

        for (var i = 0; i < elementos.length; i++) {
            elementos[i].style = "";
        }
    }

    render() {
        return (

            <main>
                <header className="container-fluid pl-4 bg-secondary text-white">
                    <div className="container">
                        <h2>Produtos</h2>
                    </div>
                </header>
                <div className="container">
                    <div className="dropdown-show d-flex justify-content-center my-4">
                        <a className="btn dropdown-toggle d-flex align-items-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <p className="my-auto">Categorias</p>
                        </a>

                        <div className="dropdown-menu shadow" aria-labelledby="dropdownMenuLink">
                            <button className="dropdown-item" type="button" onClick={() => this.exibirTodos()}>Todos(12)</button>
                            <button className="dropdown-item" type="button" onClick={() => this.exibirCategoria('geladeira')}>Geladeiras(3)</button>
                            <button className="dropdown-item" type="button" onClick={() => this.exibirCategoria('fogao')}>Fogões(2)</button>
                            <button className="dropdown-item" type="button" onClick={() => this.exibirCategoria('microondas')}>Microondas(3)</button>
                            <button className="dropdown-item" type="button" onClick={() => this.exibirCategoria('lavadora')}>Lavadora de Roupas(2)</button>
                            <button className="dropdown-item" type="button" onClick={() => this.exibirCategoria('lavaLoucas')}>Lava Louças(2)</button>
                        </div>
                    </div>

                    <CardProdutos arrayProdutos={this.state.db} />

                </div>
            </main>
        );
    }
}


