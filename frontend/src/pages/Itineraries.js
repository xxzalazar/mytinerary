import React, {useState, useEffect} from "react"
import axios from "axios"
import Itinerary from "../components/Itinerary"
import flechaD from "../img/flechaD.png"
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"
import citiesActions from "../redux/actions/citiesActions"

const Itineraries = (props) => {
  const searchId = props.match.params.id
  const [responseData, setResponseData] = useState([])
  useEffect(() => {
    const itData = async () => {
      const infoIt = await axios.get(
        `http://127.0.0.1:4000/api/Itineraries/${searchId}`
      )
      console.log(infoIt.data.it)
      setResponseData(infoIt.data.it)
    }
    itData()
    props.getCity(searchId)
  }, [])

  /*useEffect(() => {
    const cityData = async () => {
      const infoC = await axios.get(
        `http://127.0.0.1:4000/api/Cities/${searchId}`
      )
      setSearchedCity(infoC.data.city)
    }
    cityData()
    const itData = async () => {
      const infoIt = await axios.get(
        `http://127.0.0.1:4000/api/Itineraries/${searchId}`
      )
      console.log(infoIt.data.it)
      setResponseData(infoIt.data.it)
    }
    itData()
  }, [])*/

  /*useEffect(
    () =>
      axios
        .get(`http://127.0.0.1:4000/api/Itineraries/${searchId}`)
        .then((response) => {
          setResponseData(response.data.it);
        })
        .catch((error) => {
          console.log(error);
        }),
    []
  );*/

  const alertitineraries = () => {
    if (responseData.length === 0) {
      return (
        <div>No hay itinerarios disponibles. Sé el primero en cargar uno!</div>
      )
    }
  }
  return (
    <>
      <div
        className="cajaGrande"
        style={{
          backgroundImage: `url(${props.city.pic})`,
          width: "60%",
          height: "10vw",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginLeft: "20%",
        }}
      >
        {" "}
        <div className="textoCiudades">
          <h4 className="ciudades"> {props.city.city} </h4>{" "}
        </div>
      </div>
      <div
        style={{
          minHeight: "60vh",
          margin: "5%",
          marginLeft: "23%",
          alignItems: "center",
          width: "60%",
        }}
      >
        {alertitineraries()}
        {responseData.map((itinerary) => {
          return <Itinerary itinerary={itinerary} />
        })}
      </div>
      <NavLink to="/Cities">
        <img src={flechaD} style={{width: "10vw", height: "10vw"}} />
      </NavLink>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    city: state.cities.city,
  }
}
const mapDispatchToProps = {
  getCity: citiesActions.getCity,
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)
