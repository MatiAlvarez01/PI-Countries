import axios from "axios"
import { GET_COUNTRIES, SEARCH_COUNTRIES, ORDER_NAMES, ORDER_POPULATION, FILTER_REGION } from "./constants";
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

export function searchCountriesByName(name) {
    return function(dispatch) {
        return axios.get(`${COUNTRIES_URL}?name=${name}`)
            .then(countries => {
                dispatch({
                    type: SEARCH_COUNTRIES,
                    payload: countries.data
                })
            })
    }
}

export function orderByName(order) {
    return function(dispatch) {
        return dispatch({
            type: ORDER_NAMES,
            payload: order
        })
    }
}

export function orderByPopulation(order) {
    return function(dispatch) {
        return dispatch({
            type: ORDER_POPULATION,
            payload: order
        })
    }
}

export function filterByRegion(region) {
    return function(dispatch) {
        return dispatch({
            type: FILTER_REGION,
            payload: region
        })
    }
}