// Dependencias e biblioteca.
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// Components | Views
import Nav from './components/Nav/NavBar';
import Footer from './components/Footer/Footer';
import Home from './Views/Home';
import Produtos from './Views/Produtos';
import Lojas from './Views/Lojas';
import Contato from './Views/Contato';
import Pedidos from './Views/Pedidos';

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/produtos" component={Produtos} />
          <Route path="/loja" component={Lojas} />
          <Route path="/contato" component={Contato} />
          <Route path="/pedido" component={Pedidos} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
