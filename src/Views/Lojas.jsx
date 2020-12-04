// Dependencias e biblioteca.
import React from 'react';

// Style, imgs, etc.
// import './styles.css';

const Lojas = () => {
    return (
        <main>
            <header className="container-fluid pl-4 bg-secondary text-white">
                <div className="container">
                    <h2>Nossas lojas</h2>
                </div>
            </header>
            {/* <!-------------------------------- Endereço das Lojas --------------------------------> */}
            <section className="container">
                <div className="d-flex align-items-end flex-column">
                    <div className="container p-2">
                        <div className="row my-5 flex-column flex-sm-row ">
                            <div className="col text-center my-4">
                                <h3>Rio de Janeiro</h3>
                                <p>Avenida Presidete Vargas, 5000</p>
                                <p>10 &ordm; andar</p>
                                <p>Centro</p>
                                <p>(21) 3333-3333</p>
                            </div>
                            <div className="col text-center my-4">
                                <h3>São Paulo</h3>
                                <p>Avenida Paulista, 985</p>
                                <p>3 &ordm; andar</p>
                                <p>Jardins</p>
                                <p>(11) 4444-4444</p>
                            </div>
                            <div className="col text-center my-4">
                                <h3>Santa Catarina</h3>
                                <p>Rua Major &Aacute;vila, 370</p>
                                <p>Vila Mariana</p>
                                <p>(47) 5555-5555</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Lojas;