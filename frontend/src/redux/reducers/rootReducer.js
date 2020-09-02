const {conbineReducers} = require("redux")
import citiesReducer from "./citiesReducer"
const rootReducer = conbineReducers({
  cities: citiesReducer,
})
export default rootReducer
