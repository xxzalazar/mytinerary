import React, { useState, useEffect } from "react"
import axios from "axios"
import citiesActions from "../redux/actions/citiesActions"
import Itinerary from "../components/Itinerary"
import arrowLeft from "../img/arrowLeft.png"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import '../css/filter.css'
import loadinggif from "../img/loadinggif.gif"

const Itineraries = props => {
	const searchId = props.match.params.id
	const [responseData, setResponseData] = useState([])
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		itData()
		props.getCity(searchId)
	}, [])
	const itData = async () => {
		const infoIt = await axios.get(
			`http://127.0.0.1:4000/api/Itineraries/${searchId}`
		)
		setResponseData(infoIt.data.it)
		setLoading(false)
	}

	const alertitineraries = () => {
		if(loading){
			return (<div style={{ margin:"30vh 38vw", width: '50vw' }}>
            <img
              src={loadinggif}
              style={{ width: '40%'}}
              alt="loading..."
            ></img>
          </div>)
	
		}else if (responseData.length === 0) {
			return (
				<div style={{textAlign:'center', width:'100%'}}><h4>There's nothing to see here.</h4>
				<p>Be te first, charge an itinerary</p>
				</div>
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
			<div style={{	minHeight: "60vh",	alignItems: "center", width: "100%",	}}>
				{alertitineraries()}
				{responseData.map((itinerary, index) => {
					return <Itinerary key={index} itinerary={itinerary} />
				})}
				<NavLink to="/Cities">
				<img src={arrowLeft} style={{ width: "10vw", marginLeft:'43%' }} />
			</NavLink>
			</div>
			
		</>
	)
}

const mapStateToProps= state=>{
	return{
	  city: state.cities.city 
	}
}
const mapDispatchToProps ={
	getCity: citiesActions.getCity
}
export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)
