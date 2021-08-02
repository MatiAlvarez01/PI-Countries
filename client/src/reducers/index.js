import { 
    GET_COUNTRIES, 
    SEARCH_COUNTRIES,
    GET_COUNTRY_DETAILS, 
    ORDER_NAMES, 
    ORDER_POPULATION, 
    FILTER_REGION,
    FILTER_ACTIVITY,
    CREATE_ACTIVITY, 
    GET_ACTIVITIES } from "../actions/constants";

var initialState = {
    countries: [],
    countriesBackup: [],
    activitiesList: [],
    countryDetails: {},
    newActivity: {}
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
        case GET_COUNTRY_DETAILS:
            return {
                ...state,
                countryDetails: action.payload
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
            const countries = state.countriesBackup;
            let countriesByRegion = []
            if (action.payload === "all") {
                countriesByRegion = countries;
            } else {
                countriesByRegion = countries.filter(country => country.region === action.payload);
            }
            return {
                ...state,
                countries: countriesByRegion
            }
        case CREATE_ACTIVITY:
            return {
                ...state,
                newActivity: action.payload
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activitiesList: action.payload
            }
        case FILTER_ACTIVITY:
            const countries2 = state.countriesBackup
            let countriesByActivity = [];
            if (action.payload === "all") {
                countriesByActivity = countries2;
            } else {
                countriesByActivity = countries2.filter(country => country.activities.filter(activity => activity.name === action.payload))
            }
            return {
                ...state,
                countries: countriesByActivity
            }
        default: return {
            ...state
        }
    }
}

export default reducer;