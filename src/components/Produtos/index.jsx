// Dependencias e biblioteca.
import React from 'react';

// Style, imgs, etc.
// import './styles.css';

class Produtos extends React.Component {

    constructor() {
        super();
        this.state = ({
            db: []
        });
        this.exibirProdutos();
    }

    exibirProdutos() {
        fetch("http://localhost/RECODE_Pro/GUERREIRO%20JEDI/REACT/FullStackEletro/fseletro/src/API/")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    db: responseJson
                });
            })
    }

    render() {
        return (

            <main>
                <header class="container-fluid pl-4 bg-secondary text-white">
                    <div class="container">
                        <h2>Produtos</h2>
                    </div>
                </header>
                <div class="container">
                    <div class="dropdown-show d-flex justify-content-center my-4">
                        <a class="btn dropdown-toggle d-flex align-items-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <p class="my-auto">Categorias</p>
                        </a>

                        <div class="dropdown-menu shadow" aria-labelledby="dropdownMenuLink">
                            <button class="dropdown-item" type="button" onclick="exibirTodos()">Todos(12)</button>
                            <button class="dropdown-item" type="button" onclick="exibirCategoria('geladeira')">Geladeiras(3)</button>
                            <button class="dropdown-item" type="button" onclick="exibirCategoria('fogao')">Fogões(2)</button>
                            <button class="dropdown-item" type="button" onclick="exibirCategoria('microondas')">Microondas(3)</button>
                            <button class="dropdown-item" type="button" onclick="exibirCategoria('lavadora')">Lavadora de Roupas(2)</button>
                            <button class="dropdown-item" type="button" onclick="exibirCategoria('lavaLoucas')">Lava Louças(2)</button>
                        </div>
                    </div>

                    <CardProdutos arrayProdutos={this.state.db} />

                </div>
            </main>
        );
    }
}

class CardProdutos extends React.Component {
    render() {
        return (
            <div class="row d-flex justify-content-between py-4">
                {this.props.arrayProdutos.map(
                    row =>
                        <div class="boxProduto col-lg-3 col-md-4 col-sm-6 col-xs-9 text-center" id="{row.categoria}">
                            <img height="120" src={row.imagem} onclick="destaque(this)" />
                            <p class="border-bottom mb-0">{row.descricao}</p>
                            <p class="mb-0"><s>R${row.preco}</s></p>
                            <p class="mb-0">R$ {row.precofinal}</p>
                        </div>
                )}
            </div>
        )
    }
}

export default Produtos;