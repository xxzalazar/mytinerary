import React from 'react';

import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min.js"
class Slide extends React.Component {
  render() {
    return (
      <>
        {this.props.data.map((slide, index) => {
          return (
            <div
              key={index}
              className="cajaGrande"
              style={{
                backgroundImage: `url(${slide.pic})`,
                width: '50%',
                height: '50%',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                borderRadius: '25px',
              }}
            >
              <div className="cajitas">
                <h4 className="ciudades"> {slide.nombre} </h4>{' '}
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
export default Slide;
