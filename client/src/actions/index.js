import axios from "axios"
import { 
    COUNTRIES_URL,
    ACTIVITY_URL } from "../constants";
import { 
    GET_COUNTRIES, 
    SEARCH_COUNTRIES,
    GET_COUNTRY_DETAILS, 
    ORDER_NAMES, 
    ORDER_POPULATION, 
    FILTER_REGION, 
    CREATE_ACTIVITY } from "./constants";

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

export function getCountryDetails(id) {
    return function(dispatch) {
        return axios.get(`${COUNTRIES_URL}/${id}`)
            .then(countryDetails => {
                dispatch({
                    type: GET_COUNTRY_DETAILS,
                    payload: countryDetails.data
                })
            })
        }
    }
    
export function createNewActivity(activity) {
    return function(dispatch) {
        return axios.post(ACTIVITY_URL, activity)
            .then(activiyPosted => {
                alert("New activity created succefully")
                return dispatch({
                    type:CREATE_ACTIVITY,
                    payload: activiyPosted.data
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
