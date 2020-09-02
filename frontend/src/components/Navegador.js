import React from 'react';
import Usuario from '../img/usuarioLogo.png';
import { Dropdown, Divider } from 'react-materialize';
import { NavLink } from 'react-router-dom';

class Navegador extends React.Component {
  render() {
    return (
      <>
        <div className="nave">
          <label for="toggle"> &#9776; </label>
          <input type="checkbox" id="toggle"></input>
          <div className="menu">
            <NavLink to="/" className="boton">
              Home
            </NavLink>

            <a className="boton" href="#">
              Link 2
            </a>

            <a href="#" className="boton">
              Link 3
            </a>
          </div>
        </div>
        <div className="usuario">
          <Dropdown
            id="Dropdown_6"
            options={{
              alignment: 'left',
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              container: null,
              coverTrigger: false,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250,
            }}
            trigger={
              <a node="button">
                <img
                  src={Usuario}
                  style={{ width: '4vw', height: '4vw' }}
                  alt="userImage"
                ></img>
              </a>
            }
          >
            <a href="#">Log In</a>
            <a href="#">two</a>
            <Divider />
            <a href="#">Sign Up</a>
          </Dropdown>
        </div>
      </>
    );
  }
}

export default Navegador;
