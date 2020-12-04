import React from 'react';

export default class Pedidos extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            db: [],
        });
        this.exibirProdutos();
    }
    // -------------------------------------   Api Produtos
    exibirProdutos() {
        fetch("http://localhost/RECODE_Pro/GUERREIRO%20JEDI/REACT/FullStackEletro/fseletro/src/Backend/Api_Pedidos.php")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    db: responseJson
                });
            })
    }

    render() {
        return (
            <div>
                <header className="container-fluid pl-4 bg-secondary text-white">
                    <div className="container">
                        <h2>Pedidos</h2>
                    </div>
                </header>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Unidade</th>
                            <th scope="col">Quant.</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.db.map(
                            row =>
                                <tr>
                                    <th scope="row">{row.idpedidos}</th>
                                    <td>{row.nomeCliente}</td>
                                    <td>{row.descricao}</td>
                                    <td>{row.valorUnitario}</td>
                                    <td>{row.quantidade}</td>
                                    <td>{row.total}</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}