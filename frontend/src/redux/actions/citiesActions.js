const citiesActions = {
  getinfo: () => {
    return async (dispatch, getState) => {
      const response = await axios.get(
        `http://127.0.0.1:4000/api/Cities/${searchId}`
      )
      const info = response.data.city
      dispatch({
        type: "GETINFO",
        payload: info,
      })
    }
  },
}
export default citiesActions
