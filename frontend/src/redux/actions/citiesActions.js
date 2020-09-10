import axios from "axios"

const citiesActions = {
  getCitiesList: () => {
    return async (dispatch, getState) => {
      const response = await axios.get(`http://127.0.0.1:4000/api/Cities`)
      const info = response.data.cities
      
      dispatch({
        type: "GETCITIES",
        payload: info,
      })
    }
  },
  getCity: (cityId)=>{
    return(dispatch, getState)=>{
      const data= getState()
      const searchedCity= data.cities.citiesList.filter((city) => city._id === cityId)
      
      dispatch({
        type: "GETCITY",
        payload: searchedCity[0],
      })
    }
  }
}
export default citiesActions
