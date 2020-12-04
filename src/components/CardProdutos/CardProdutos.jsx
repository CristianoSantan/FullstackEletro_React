import React from 'react';
import './prod.css';

export default class CardProdutos extends React.Component {

    destaqueProd (event) {

        console.log(event.target.id)
        let tam = event.target.style.height
        console.log(tam);

        if (tam == "200px") {
            event.target.style = "height: 120px"
        } else {
            event.target.style = "height: 200px"
        }        
    }

    render() {
        return (
            <div className="row d-flex justify-content-around py-4">
                {this.props.arrayProdutos.map(
                    row =>
                        <div className="boxProduto col-lg-3 col-md-4 col-sm-6 col-xs-9 text-center" id={row.categoria}>
                            <img className="prod" src={row.imagem} onMouseOver={this.destaqueProd} onMouseOut={this.destaqueProd} id={row.idproduto} />
                            <p className="border-bottom mb-0">{row.descricao}</p>
                            <p className="mb-0"><s>R$ {row.preco}</s></p>
                            <p className="mb-0">R$ {row.precofinal}</p>
                        </div>
                )}
            </div>
        );
    }
}