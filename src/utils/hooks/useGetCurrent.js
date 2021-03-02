import { useEffect, useContext } from 'react'
import CurrentInstance from '../instances/CurrentInstance'
import keys from '../keys'

import {
    turnToWarmTheme,
    turnToColdTheme,

    loadingCurrentWeather,
    successCurrentWeather,
    failureCurrentWeather,
    clearFailureState
} from '../../context/actions'
import { CurrentContext, ThemeContext } from '../../context/contexts'

const useGetCurrent = () => {
    const { currentDispatch } = useContext(CurrentContext)
    const { themeDispatch } = useContext(ThemeContext)

    useEffect(() => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
                const latitude = position.coords.latitude
                const longitude = position.coords.longitude
                currentDispatch(clearFailureState())
                currentDispatch(loadingCurrentWeather())
                CurrentInstance.get(`?lat=${latitude}&lon=${longitude}&appid=${keys.apiKeys}&units=metric`)
                    .then(response => response.data)
                    .then(data => {
                        currentDispatch(successCurrentWeather(data))
                        if(data.main.temp > 30){
                            themeDispatch(turnToWarmTheme())
                        } else {
                            themeDispatch(turnToColdTheme())
                        }
                    }).catch(err => {
                        console.log(err)
                        currentDispatch(failureCurrentWeather("failure in requesting data"))
                    })
            }, error => {
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        currentDispatch(failureCurrentWeather("User denied the request for Geolocation."))
                        break;
                    case error.POSITION_UNAVAILABLE:
                        currentDispatch(failureCurrentWeather("Location information is unavailable."))
                        break;
                    case error.TIMEOUT:
                        currentDispatch(failureCurrentWeather("The request to get user location timed out."))
                        break;
                    case error.UNKNOWN_ERROR:
                        currentDispatch(failureCurrentWeather("An unknown error occurred."))
                        break;
                }
            })
        } else {
            currentDispatch(failureCurrentWeather('Geolocation is not available!'))
        }

        return () => {}
    }, [currentDispatch])
}

export default useGetCurrent