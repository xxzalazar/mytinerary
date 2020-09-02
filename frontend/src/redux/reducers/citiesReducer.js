const initialState = {
  citiesList: [],
}
const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETINFO":
      return {...state, lista: action.payload}
    default:
      return state
  }
}
export default citiesReducer
