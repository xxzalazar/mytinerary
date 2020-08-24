import React from 'react';
import './App.css';
import Home from './pages/Home';
import M from 'materialize-css';
import { BrowserRouter, Route, Redirect, Link, Switch } from 'react-router-dom';
import Cities from './pages/Cities';
import Footer1 from './components/Footer';
import Navegador from './components/Navegador';
class App extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div className="App">
        <Navegador />
        <BrowserRouter>
          <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/Cities" component={Cities} />
            <Redirect to="/Home" />
          </Switch>
        </BrowserRouter>
        <Footer1 />
      </div>
    );
  }
}

export default App;
