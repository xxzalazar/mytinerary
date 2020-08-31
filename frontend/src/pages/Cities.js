import React from 'react';
import Filtro from '../components/Filtro';
import axios from 'axios';
import '../css/filter.css';

class Cities extends React.Component {
  state = {
    places: [],
    filteredPlaces: [],
  };
  async componentDidMount() {
    const response = await axios.get('http://127.0.0.1:4000/api/Cities');
    const list = response.data.cities;
    this.setState({
      places: list,
      filteredPlaces: list,
    });
  }
  capturarValor = (e) => {
    const valorDeseado = e.target.value;
    const filtered = this.state.places.filter(
      (place) =>
        place.city
          .toLowerCase()
          .trim()
          .indexOf(valorDeseado.toLowerCase().trim()) === 0
    );
    this.setState({
      filteredPlaces: filtered,
    });
  };
  render() {
    return (
      <>
        <div>
          <h1>Cities</h1>
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              name="city"
              id="ciudad"
              onChange={this.capturarValor}
              required
            />
          </div>
          <ul
            style={{ marginLeft: '26%', marginBottom: '5%', minHeight: '30vw' }}
          >
            {this.state.filteredPlaces.map((place) => {
              return <Filtro key={place.name} place={place} />;
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default Cities;
