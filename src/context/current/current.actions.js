import {
    LOADING_CURRENT_WEATHER,
    SUCCESS_CURRENT_WEATHER,
    FAILURE_CURRENT_WEATHER,

    CLEAR_FAILURE_STATE
} from './current.types'

export function loadingCurrentWeather(){
    return {
        type: LOADING_CURRENT_WEATHER
    }
}

export function successCurrentWeather(data){
    return {
        type: SUCCESS_CURRENT_WEATHER,
        payload: data
    }
}

export function failureCurrentWeather(error){
    return{
        type: FAILURE_CURRENT_WEATHER,
        error
    }
}

export function clearFailureState(){
    return {
        type: CLEAR_FAILURE_STATE
    }
}