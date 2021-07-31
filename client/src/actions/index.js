import axios from "axios"
import { GET_COUNTRIES } from "./constants";
import { COUNTRIES_URL } from "../constants";

export function getCountries() {
    return function(dispatch) { //Este dispatch me lo da el Redux Thunk
        return axios.get(COUNTRIES_URL)
            .then(countries => {
                dispatch({
                    type: GET_COUNTRIES,
                    payload: countries.data
                })
            })
    }
}