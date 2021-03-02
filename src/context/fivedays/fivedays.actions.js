import {
    LOADING_FIVEDAYS_WEATHER,
    SUCCESS_FIVEDAYS_WEATHER,
    FAILURE_FIVEDAYS_WEATHER
} from './fivedays.types'

export function loadingFiveDaysWeather() {
    return {
        type: LOADING_FIVEDAYS_WEATHER
    }
}

export function successFiveDaysWeather(city, list) {
    return {
        type: SUCCESS_FIVEDAYS_WEATHER,
        city,
        list
    }
}

export function failureFiveDaysWeather(error) {
    return {
        type: FAILURE_FIVEDAYS_WEATHER,
        error
    }
}