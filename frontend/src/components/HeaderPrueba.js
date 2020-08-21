import React from 'react';
import Myti from '../img/myti.png';
import Usuario from '../img/usuarioLogo.png';
import FlechaD from '../img/flechaCity.png';
import { Link } from 'react-router-dom';
import { Dropdown, Divider, Button } from 'react-materialize';

const HeaderPrueba = () => {
  return (
    <>
      <div
        className="nave"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <label for="toggle"> &#9776; </label>
        <input type="checkbox" id="toggle"></input>

        <div className="menu">
          <button href="#">Link 1</button>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>

      <div
        className="header1"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 'inherit',
          height: '50vh',
        }}
      >
        <div
          className="header0"
          style={{ alignSelf: 'center', height: '30vw', width: '65vw' }}
        >
          {' '}
          <img
            id="usuarioLogo"
            src={Myti}
            style={{ width: '100%', height: '90%' }}
          ></img>{' '}
        </div>
      </div>

      <div
        style={{
          width: '50%',
          textAlign: 'center',
          marginBottom: '3vh',
          marginTop: '1vw',
          marginLeft: '26%',
        }}
      >
        <p className="textoPrincipal">
          Find your perfect trip, designed by insiders who know and love their
          cities.
        </p>
        <Link to="/cities">
          {' '}
          <img style={{ width: '10vh' }} src={FlechaD}></img>{' '}
        </Link>
      </div>
    </>
  );
};
export default HeaderPrueba;
