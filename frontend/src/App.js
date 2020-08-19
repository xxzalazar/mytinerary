import React from 'react';
import './App.css';
import Home from './pages/Home'
import M from 'materialize-css'
import {BrowserRouter, Route, Redirect, Link, Switch} from 'react-router-dom'
import Cities from './pages/Cities';
import HeaderPrueba from './components/HeaderPrueba'
import Header from './components/Header';

class App extends React.Component{
  componentDidMount(){
    M.AutoInit()
  }
  render(){
    return (
      <div className="App">
        
        <BrowserRouter>
        <Switch>
          <Route path="/Home" component={Home}/>
          <Route path="/Cities" component={Cities}/>
          <Redirect to="/Home"/>
        </Switch>
        </BrowserRouter>
       

      </div>
    );
  }
}

export default App;
