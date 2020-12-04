import React from 'react';

export default class CardProdutos extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            height: 120
        });
        this.destaque = this.destaque.bind(this);
    }
    //  -----------------------------------   Destacar imagem   
    destaque = () => {
        let state = this.state.height;
        if (state === 160) {
            state = 120;
        }
        else {
            state = 160;
        }
        this.setState({
            height: state
        });
    }
    render() {
        return (
            <div className="row d-flex justify-content-around py-4">
                {this.props.arrayProdutos.map(
                    row =>
                        <div className="boxProduto col-lg-3 col-md-4 col-sm-6 col-xs-9 text-center" id={row.categoria}>
                            <img height={this.state.height} src={row.imagem} onClick={this.destaque} />
                            <p className="border-bottom mb-0">{row.descricao}</p>
                            <p className="mb-0"><s>R$ {row.preco}</s></p>
                            <p className="mb-0">R$ {row.precofinal}</p>
                        </div>
                )}
            </div>
        );
    }
}