import React from 'react';
import { NavLink } from 'react-router-dom';

const Filtro = (props, index) => {
  return (
    <>
      <NavLink to={`/itineraries/${props.place._id}`}>
        <div
          className="cajaGrande"
          key={index}
          style={{
            backgroundImage: `url(${props.place.pic})`,
            width: '70%',
            height: '10vw',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {' '}
          <div className="textoCiudades">
            <h4 className="ciudades"> {props.place.city} </h4>{' '}
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Filtro;
