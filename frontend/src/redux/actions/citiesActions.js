import axios from "axios"
const citiesActions = {
  getInfo: () => {
    return async (dispatch, getState) => {
      const response = await axios.get(`http://127.0.0.1:4000/api/Cities`)
      const info = response.data.cities
      dispatch({
        type: "GETINFO",
        payload: info,
      })
    }
  },
  getCity: (searchId) => {
    return async (dispatch, getState) => {
      const response = await axios.get(
        `http://127.0.0.1:4000/api/Cities/${searchId}`
      )
      const cityInfo = response.data.city

      dispatch({
        type: "GETCITY",
        payload: cityInfo,
      })
    }
  },
}
export default citiesActions
