export function weatherReducer(state, action) {
    switch (action.type) {
        case 'SET_CITY': {
            return {...state, city: action.payload};
        }
        case 'SET_UNIT': {
            return {...state, unit: action.payload};
        }
        case 'FETCH_START': {
            return {...state, loading: true, error: null};
        }
        case 'FETCH_SUCCESS': {
            return {...state, loading: false, weatherData: action.payload};
        }
        case 'FETCH_FAIL': {
            return {...state, loading: false, error: action.payload};
        }
        default:
            return state;
    }
}

export const initialState = {
    city: '',
    weatherData: null,
    loading: false,
    error: null,
    unit: 'metric',
};