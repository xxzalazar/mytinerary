import React, { useState, useEffect } from "react"
import axios from "axios"
import Itinerary from "../components/Itinerary"
import arrowLeft from "../img/arrowLeft.png"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import citiesActions from "../redux/actions/citiesActions"
import '../css/filter.css'

const Itineraries = props => {
	const searchId = props.match.params.id
	const [responseData, setResponseData] = useState([])
	useEffect(() => {
		itData()
		props.getCity(searchId)
	}, [])
	const itData = async () => {
		const infoIt = await axios.get(
			`http://127.0.0.1:4000/api/Itineraries/${searchId}`
		)
		console.log(infoIt.data.it)
		setResponseData(infoIt.data.it)
	}

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
				className="bannerCity"
				style={{backgroundImage: `url(${props.city.pic})`}}>
				<div className="textoCiudades">
					<h4 className="ciudades"> {props.city.city} </h4>
				</div>
			</div>
			<div style={{	minHeight: "50wh",	alignItems: "center", width: "60%",	}}>
				{alertitineraries()}
				{responseData.map(itinerary => {
					return <Itinerary itinerary={itinerary} />
				})}
			</div>
			<NavLink to="/Cities">
				<img src={arrowLeft} style={{ width: "10vw", height: "10vw", marginLeft:'50%' }} />
			</NavLink>
		</>
	)
}
const mapStateToProps = state => {
	return {
		city: state.cities.city,
	}
}
const mapDispatchToProps = {
	getCity: citiesActions.getCity,
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)
