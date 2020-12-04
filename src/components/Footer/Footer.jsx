import React from 'react';
import './styles.css';
// import pagamento from '../documents/img/pagamento.png';

const Footer = () => {
    return (
        <footer className="d-flex justify-content-center m-0" id="footer">
            <div className="d-flex flex-column align-items-center">
                <h5 id="formas_pagamento">Formas de pagamento:</h5>
                <img width="200px" src="./img/pagamento.png" alt="Formas de pagamento" />
                <p> &copy; <em>Recode Pro</em></p>
            </div>
        </footer>
    );
}

export default Footer;