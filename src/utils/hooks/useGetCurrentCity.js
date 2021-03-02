import { useEffect, useContext } from 'react'
import {
    turnToWarmTheme,
    turnToColdTheme,

    loadingCurrentWeather,
    successCurrentWeather,
    failureCurrentWeather,
    clearFailureState
} from '../../context/actions'

import CurrentInstance from '../instances/CurrentInstance'
import keys from '../keys'
import { CurrentContext, ThemeContext } from '../../context/contexts'

function useGetCurrentCity(city){
    const { themeDispatch } = useContext(ThemeContext)
    const { currentDispatch } = useContext(CurrentContext)

    useEffect(() => {
        async function getCurrentWeatherCity(){
            try {
                currentDispatch(clearFailureState())
                currentDispatch(loadingCurrentWeather())
                const response = await CurrentInstance.get(`?q=${city}&appid=${keys.apiKeys}&units=metric`)
                const data = await response.data
                currentDispatch(successCurrentWeather(data))

                if(data.main.temp > 30){
                    themeDispatch(turnToWarmTheme())
                } else {
                    themeDispatch(turnToColdTheme())
                }
            } catch(error) {
                console.log(error)
                currentDispatch(failureCurrentWeather(`Cannot search city name of ${city}`))
            }
        }

        getCurrentWeatherCity()

        return () => {
            
        }
    }, [city])
}

export default useGetCurrentCity