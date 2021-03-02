import {
    LOADING_CURRENT_WEATHER,
    SUCCESS_CURRENT_WEATHER,
    FAILURE_CURRENT_WEATHER,

    CLEAR_FAILURE_STATE
} from './current.types'

export const initialCurrentState = {
    loading: false,
    data: {
        main:{

        },
        weather: [
            
        ],
        clouds: {

        },
        sys: {

        },
        wind: {
            
        }
    },
    error: ""
}

export const currentReducer = (state, action) => {
    switch(action.type){
        case LOADING_CURRENT_WEATHER:
            return {
                ...state,
                loading: true,
            }
        case SUCCESS_CURRENT_WEATHER:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case FAILURE_CURRENT_WEATHER:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case CLEAR_FAILURE_STATE:
            return {
                ...state,
                error: ""
            }
        default: return { ...state }
    }
}

