import { GET_COUNTRIES, SEARCH_COUNTRIES, ORDER_NAMES, ORDER_POPULATION, FILTER_REGION } from "../actions/constants";

var initialState = {
    countries: [],
    countriesBackup: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                countries: action.payload,
                countriesBackup: action.payload
            }
        case SEARCH_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case ORDER_NAMES:
            var compareNames = function() {}
            if (action.payload === "ASC") {
                compareNames = function(a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    } else {
                    }
                    return 0;
                }
            } else if (action.payload === "DESC") {
                compareNames = function(a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (a.name < b.name) {
                        return 1;
                    } else {
                    }
                    return 0;
                }
            }
            const countriesByName = state.countries.sort(compareNames);
            return {
                ...state,
                countries: countriesByName
            }
        case ORDER_POPULATION:
            var comparePopulation = function() {}
            if (action.payload === "ASC") {
                comparePopulation = function(a, b) {
                    if (a.population > b.population) {
                        return 1;
                    }
                    if (a.population < b.population) {
                        return -1;
                    } else {
                    }
                    return 0;
                }
            } else if (action.payload === "DESC") {
                comparePopulation = function(a, b) {
                    if (a.population > b.population) {
                        return -1;
                    }
                    if (a.population < b.population) {
                        return 1;
                    } else {
                    }
                    return 0;
                }
            }
            const countriesByPopulation = state.countries.sort(comparePopulation)
            return {
                ...state,
                countries: countriesByPopulation
            }
        case FILTER_REGION:
            
            const countriesByRegion = state.countries;
            return {
                countries: countriesByRegion
            }
        //case ORDER --> generar un nuevo array ordenado y devolverlo.
        default: return {
            ...state
        }
    }
}

export default reducer;