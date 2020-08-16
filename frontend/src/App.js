import React from 'react';
import './App.css';
import Home from './pages/home'
import M from 'materialize-css'

class App extends React.Component{
  componentDidMount(){
    M.AutoInit()
  }
  render(){
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
