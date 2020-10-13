import React from 'react';
import './App.css';
import Home from './pages/Home';
import M from 'materialize-css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Cities from './pages/Cities';
import Navegador from './components/Navegador';
import Itineraries from './pages/Itineraries';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Footer1 from './components/Footer';

class App extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navegador />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Cities" component={Cities} />
            <Route path="/Itineraries/:id" component={Itineraries} />
            <Route path="/Sign-In" component={SignIn} />
            <Route path="/Sign-Up" component={SignUp} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
        <Footer1/>
      </div>
    );
  }
}

export default App;
