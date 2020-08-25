import React from 'react';
import './App.css';
import Home from './pages/Home';
import M from 'materialize-css';
import { BrowserRouter, Route, Redirect, Link, Switch } from 'react-router-dom';
import Cities from './pages/Cities';
import Footer1 from './components/Footer';
import Navegador from './components/Navegador';
import Itineraries from './pages/Itineraries';
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
            <Route path="/" component={Home} />
            <Route path="/Cities" component={Cities} />
            <Route path="/itineraries" component={Itineraries}></Route>
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
        <Footer1 />
      </div>
    );
  }
}

export default App;
