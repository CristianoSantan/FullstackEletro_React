// Dependencias e biblioteca.
import React from 'react';

export default class Contato extends React.Component {

    constructor() {
        super();
        this.state = ({
            db: []
        });
        this.exibirMsgm();
    }

    exibirMsgm() {
        fetch("http://localhost/RECODE_Pro/GUERREIRO%20JEDI/REACT/FullStackEletro/fseletro/src/Backend/Api_Mensagens.php")
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
                        <h2>Contato</h2>
                    </div>
                </header>
                <section>
                    <div class="container my-3 p-3 bg-light rounded shadow-lg">
                        <section class="container">
                            <div class="row">
                                <div class="col-6" id="contato">
                                    <div class="text-center">
                                        <img class="my-2" height="40" src="./img/email.png" alt="email" />
                                        <p>contato@fullstackeletro.com</p>
                                    </div>
                                </div>
                                <div class="col-6" id="contato">
                                    <div class="text-center">
                                        <img height="55" src="./img/whatsapp.png" alt="zap" />
                                        <p class="">(11) 9999-9999</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <NameForm />

                    <Mensagem arrayContato={this.state.db} />

                </section>
            </main >
        );
    }
}

class Mensagem extends React.Component {
    render() {
        return (
            <div class="container my-3 p-3 bg-light rounded shadow-lg">
                <h6 class="border-bottom border-gray pb-2 mb-0">Mensagens</h6>
                {this.props.arrayContato.map(
                    row =>
                        <div class="media text-muted pt-3">
                            <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                            </svg>
                            <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <strong class="text-gray-dark">{row.nome}</strong>
                                    <p>{row.data}</p>
                                </div>
                                <p class="d-block">{row.msg}</p>
                            </div>
                        </div>
                )}
            </div>
        )
    }
}

class NameForm extends React.Component {
    
    //Pego o Formulario quando é cliado em Enviar
    handleSubmit(event) {

        // event.preventDefault();//Seria para não recarregar a pagina
        const thisForm = document.getElementById('formmsg');//estou atribuindo uma const e pegando o id do formulario
        var formData = new FormData(thisForm); //Estou declarando a variavel e instanciando ela e por parametro pegando o form
        fetch('http://localhost/RECODE_Pro/GUERREIRO%20JEDI/REACT/FullStackEletro/fseletro/src/Backend/Api_Mensagens.php', { //Mandando para minha API
            method: 'post', body: formData
        }).then((response) => response.json())//Utilizando o method POST trazendo a variavel FormData e transformando em JSON
            .then((responseJson) => {
                console.log(responseJson); //Mostrar meu JSON no console
            });
    }

    render() {
        
        return (
            <form onSubmit={this.handleSubmit} id="formmsg" name="formmsg" method="post" class="container my-3 p-3 bg-light rounded shadow-lg">
                <div class="form-group">
                    <label for="nome">Nome:</label>
                    <input type="text" class="form-control mb-3" name="nome" />
                    <label for="msg">Mensagem:</label>
                    <textarea name="msg" class="form-control mb-3" id="msg" cols="50" rows="2"></textarea>
                    <input type="submit" name="submit" class="btn btn-primary mt-2" value="Enviar" />
                </div>
            </form>
        );
    }
}

