/*import axios from 'axios';
import React, { Component, useState } from 'react';

class Itineraries extends Component {
  state = {
    list: [],
  };
  async componentDidMount() {
    const searchId = this.props.match.params.id;
    const response = await axios.get(
      `http://127.0.0.1:4000/api/Itineraries/${searchId}`
    );
    const itinerariesList = response.data.it;
    this.setState({
      list: itinerariesList,
    });
  }
  render() {
    
    return (
      <div style={{ minHeight: '60vh', margin: '5%', marginLeft: '28%' }}>
        {vacio()}
        {this.state.list.map((itinerary, index) => {
          return (
            <div className='itinerariesBox'
              style={{
                border: 'black solid 0.1vw',
                width: '44vw',
                minHeight: '14vw',
                display: 'flex',
                padding: '1%',
                marginBottom: '1.3%',
                background: 'white',
              }}
            >
              <img
                src={itinerary.profilePhoto}
                style={{
                  boxShadow: ' 0vw 1.1vh 1.1vh rgb(0, 0, 0, 0.5)',
                  width: '6vw',
                  height: '6vw',
                  borderRadius: '50%',
                  margin: '3%',
                  border: '2px white solid',
                }}
              ></img>

              <ul style={{ marginLeft: '3.4%', flexDirection: 'row'}}>
                <div style={{ flexDirection: 'row' }}>
                  <li>{itinerary.rating}</li>
                  <li>{itinerary.duration} hs.</li>
                  <li>{itinerary.price}</li>
                </div>
                <li>{itinerary.hashtag}</li>
              </ul>
              <button
                style={{ height: '2vw', alignSelf: 'center' }}
                onClick={() => {
                  setView(!view);
                }}
              >
                {' '}
                {view ? 'View more' : 'View less'}
              </button>
              {view && (
                <div>
                  <h1>contenido oculto</h1>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Itineraries;*//*}
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
*/