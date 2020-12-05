// Dependencias e biblioteca.
import React from 'react';

export default function Contato() {
    const [student, setStudent] = React.useState([])
    const [render, setRender] = React.useState(false)
    const [msg, setMsg] = React.useState(false)
    const [nome, setNome] = React.useState("");
    const [mensagem, setMensagens] = React.useState("");


    // execute essa função que lista os estudantes sempre que o componente for 
    //renderizado pela primeira vez.[]

    //execute essa funçao que liste os estudantes, sempre que o componente for 
    //renderizado pela primeira vez
    //sempre que determinado estado for alterado.[render]
    React.useEffect(async () => {
        const url = "http://localhost/RECODE_Pro/GUERREIRO%20JEDI/REACT/FullStackEletro/fseletro/src/Backend/Api_Mensagens.php";
        const response = await fetch(url);
        setStudent(await response.json());
    }, [render])

    function handleSubmit(event) {
        event.preventDefault();
        //console.log(event.target);
        let formData = new FormData(event.target)

        const url = "http://localhost/RECODE_Pro/GUERREIRO%20JEDI/REACT/FullStackEletro/fseletro/src/Backend/Api_Mensagens.php";

        fetch(url, {//dois parametros POST
            method: "POST",
            body: formData
        }).then((response) => response.json()).then((dados) => {
            setRender(!render);
            setMensagens("");
            setNome("");
            setMsg(dados); //Configurado para verdadeiro
            setTimeout(() => {
                setMsg(false);
            }, 2000)
        })

    }

    return (
        <main>
            <header className="container-fluid pl-4 bg-secondary text-white">
                <div className="container">
                    <h2>Contato</h2>
                </div>
            </header>
            <section>
                <div className="container my-3 p-3 bg-light rounded shadow-lg">
                    <section className="container">
                        <div className="row">
                            <div className="col-6" id="contato">
                                <div className="text-center">
                                    <img className="my-2" height="40" src="./img/email.png" alt="email" />
                                    <p>contato@fullstackeletro.com</p>
                                </div>
                            </div>
                            <div className="col-6" id="contato">
                                <div className="text-center">
                                    <img height="55" src="./img/whatsapp.png" alt="zap" />
                                    <p className="">(11) 9999-9999</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <form onSubmit={handleSubmit} id="formmsg" name="formmsg" method="post" className="container my-3 p-3 bg-light rounded shadow-lg">
                    <div className="form-group">
                        <label for="nome">Nome:</label>
                        <input value={nome} onChange={(event) => setNome(event.target.value)} type="text" className="form-control mb-3" name="nome" />
                        <label for="msg">Mensagem:</label>
                        <textarea value={mensagem} onChange={(event) => setMensagens(event.target.value)} name="msg" className="form-control mb-3" id="msg" cols="50" rows="2"></textarea>
                        <input type="submit" name="submit" className="btn btn-primary mt-2" value="Enviar" />
                    </div>
                </form>

                {msg &&
                    <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                        Cadastro efetuado com sucesso!
                </div>
                }

                <div className="container my-3 p-3 bg-light rounded shadow-lg">
                    <h6 className="border-bottom border-gray pb-2 mb-0">Mensagens</h6>
                    {student.map(
                        row =>
                            <div className="media text-muted pt-3">
                                <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                                </svg>
                                <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <strong className="text-gray-dark">{row.nome}</strong>
                                        <p>{row.data}</p>
                                    </div>
                                    <p className="d-block">{row.msg}</p>
                                </div>
                            </div>
                    )}
                </div>

            </section>
        </main >
    );
}
