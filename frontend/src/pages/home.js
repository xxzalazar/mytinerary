import React from 'react';
import Carrusel from '../components/Carousel';
import { Link } from 'react-router-dom';
import Myti from '../img/myti.png';
import FlechaD from '../img/flechaCity.png';
import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min.js"

class Home extends React.Component {
  render() {
    return (
      <>
        <div
          className="cajaBestia"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ alignSelf: 'center', height: '25vw', width: '65vw' }}>
            <img
              src={Myti}
              style={{ width: '100%', height: '90%' }}
              alt="logo"
            ></img>
          </div>
          <div className="cajaFlecha">
            <p className="textoPrincipal">
              Find your perfect trip, designed by insiders who know and love
              their cities.
            </p>
            <Link to="/cities">
              {' '}
              <img
                style={{ width: '10vh' }}
                src={FlechaD}
                alt="arrowCities"
              ></img>{' '}
            </Link>
          </div>
        </div>
        <Carrusel />
      </>
    );
  }
}
export default Home;
