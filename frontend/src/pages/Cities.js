import React, { useEffect, useState} from 'react';
import City from '../components/City';
import { connect } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';
import '../css/filter.css';
const Cities = (props) =>{
const [filteredData , setFilteredData]= useState('')

useEffect(()=>{
  props.getCitiesList()
},[])
const getValue = (e) => {
  const wantedValue = e.target.value; 
  setFilteredData(wantedValue)
};
const filter= (cities, value)=>{
  const filtered = cities.filter(
    (city) =>
      city.city
        .toLowerCase()
        .trim()
        .indexOf(value.toLowerCase().trim()) === 0
  );
  return filtered
}
  return (
    <>
      <div>
        <h1>Cities</h1>
        <div style={{marginLeft:"22%"}}>
        <div className="search">
          <input type="text"  placeholder="Search city..."  name="city"  id="ciudad"  onChange={getValue} required/>
        </div>
        <ul  style={{marginBottom: '5%', marginLeft:"2.5%" ,minHeight: '30vw' }}>
          {filter(props.citiesList, filteredData).map((place) => {
            return <City key={place.city} place={place} />;
          })}
        </ul>
        </div>
      </div>
    </>
  );
}

const mapStateToProps= state=>{
  return{
    citiesList: state.cities.citiesList
  }
}
const mapDispatchToProps ={
  getCitiesList: citiesActions.getCitiesList
}
export default connect(mapStateToProps, mapDispatchToProps)(Cities)