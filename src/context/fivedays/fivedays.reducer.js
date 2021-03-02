import {
    LOADING_FIVEDAYS_WEATHER,
    SUCCESS_FIVEDAYS_WEATHER,
    FAILURE_FIVEDAYS_WEATHER
} from './fivedays.types'

export const initialFivedaysState = {
    city: {},
    list: [],
    loading: false,
    error: ''
}

export const fivedaysReducer = (state, action) => {
    switch(action.type){
        case LOADING_FIVEDAYS_WEATHER:
            return {
                ...state,
                loading: true
            }
        case SUCCESS_FIVEDAYS_WEATHER:
            return {
                ...state,
                city: action.city,
                list: action.list,
                loading: false
            }
        case FAILURE_FIVEDAYS_WEATHER:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default: return { ...state }
    }
}