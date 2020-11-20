import React from 'react';
import './styles.css';
import pagamento from '../documents/img/pagamento.png';

const Footer = () => {
    return (
        <footer class="d-flex justify-content-center m-0" id="footer">
            <div class="d-flex flex-column align-items-center">
                <h5 id="formas_pagamento">Formas de pagamento:</h5>
                <img width="200px" src={pagamento} alt="Formas de pagamento" />
                <p> &copy; <em>Recode Pro</em></p>
            </div>
        </footer>
    );
}

export default Footer;