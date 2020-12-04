// Dependencias e biblioteca.
import React from 'react';

// Style, imgs, etc.
// import './styles.css';

const Home = () => {
  return (
      <main role="main">
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-3">Seja bem vindo(a)!</h1>
                <p>Aqui em nossa loja, programadores tem desconto nos produtos para sua casa!</p>
                <p><a className="btn btn-primary btn-lg" href="#" role="button">Saiba mais »</a></p>
            </div>
        </div>
      </main>
  );
}

export default Home;