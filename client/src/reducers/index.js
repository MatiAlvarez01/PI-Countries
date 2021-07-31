import { GET_COUNTRIES } from "../actions/constants";


var initialState = {
    countries: [],
    countryDetails: {}
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        //case ORDER --> generar un nuevo array ordenado y devolverlo.
        default: return {
            ...state
        }
    }
}

export default reducer;