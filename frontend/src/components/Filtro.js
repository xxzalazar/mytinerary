import React from 'react';

const Filtro = (props, index) => {
  return (
    <>
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
          <h4 className="ciudades"> {props.place.name} </h4>{' '}
        </div>
      </div>
    </>
  );
};

export default Filtro;
