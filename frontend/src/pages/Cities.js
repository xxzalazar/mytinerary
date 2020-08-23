import React from 'react';
import Filtro from '../components/Filtro';

class Cities extends React.Component {
  state = {
    places: [
      {
        pic: 'https://www.gotokyo.org/es/plan/tokyo-outline/images/main.jpg',
        nombre: 'Tokyo Japan',
      },
      {
        pic:
          'https://resizer.codigounico.com/resizer/resizer.php?imagen=https://www.codigounico.com/wp-content/uploads/sites/2/2018/12/top-30-de-los-mejores-destinos-turisticos-de-2018-13.jpg&nuevoancho=750&crop=0',
        nombre: 'Tokyo Italy',
      },
      {
        pic:
          'https://www.mundo-nomada.com/wp-content/uploads/2017/02/Wat-samphran1-1200x900.jpg',
        nombre: 'Tokyo',
      },
      {
        pic: 'https://i.ytimg.com/vi/dHOQV-ZGAVw/maxresdefault.jpg',
        nombre: 'France',
      },
    ],
    filteredPlaces: [
      {
        pic: 'https://www.gotokyo.org/es/plan/tokyo-outline/images/main.jpg',
        nombre: 'Tokyo Japan',
      },
      {
        pic:
          'https://resizer.codigounico.com/resizer/resizer.php?imagen=https://www.codigounico.com/wp-content/uploads/sites/2/2018/12/top-30-de-los-mejores-destinos-turisticos-de-2018-13.jpg&nuevoancho=750&crop=0',
        nombre: 'Tokyo Italy',
      },
      {
        pic:
          'https://www.mundo-nomada.com/wp-content/uploads/2017/02/Wat-samphran1-1200x900.jpg',
        nombre: 'Tokyo',
      },
      {
        pic: 'https://i.ytimg.com/vi/dHOQV-ZGAVw/maxresdefault.jpg',
        nombre: 'France',
      },
    ],
  };
  capturarValor = (e) => {
    const valorDeseado = e.target.value;
    console.log(valorDeseado);
    const filtered = this.state.places.filter(
      (place) =>
        place.nombre
          .toLowerCase()
          .trim()
          .indexOf(valorDeseado.toLowerCase().trim()) == 0
    );
    this.setState({
      filteredPlaces: filtered,
    });
  };
  render() {
    return (
      <>
        <div>
          <h1>hola</h1>
          <input
            type="text"
            placeholder="ingrese una ciudad"
            name="ciudad"
            id="ciudad"
            onChange={this.capturarValor}
          />
          <ul>
            {this.state.filteredPlaces.map((place) => {
              return <Filtro key={place.nombre} place={place} />;
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default Cities;
