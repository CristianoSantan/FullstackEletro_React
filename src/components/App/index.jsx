// Dependencias e biblioteca.
import React from 'react';

// Components.
import Nav from '../Nav';
import Footer from '../Footer';

// Style, imgs, etc.
import './styles.css';

const App = () => {
  return (
    <>
      <Nav />
      <main role="main">
        <div class="jumbotron">
            <div class="container">
                <h1 class="display-3">Seja bem vindo(a)!</h1>
                <p>Aqui em nossa loja, programadores tem desconto nos produtos para sua casa!</p>
                <p><a class="btn btn-primary btn-lg" href="#" role="button">Saiba mais »</a></p>
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
