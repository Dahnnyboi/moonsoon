import React from 'react'
import { ContentsText, WeatherContainer, Weather, WeatherImage, WeatherInformations, SingleDayWeatherContainer } from '../../../assets/stylesheets/common'
import useConvertReadableTimeFormat from '../../../utils/hooks/useConvertReadableTimeFormat'

function SingleDayWeather({ data }) {
    const time = useConvertReadableTimeFormat(data.dt_txt)
    
    return (
        <SingleDayWeatherContainer>
            <ContentsText fontSize="0.8em" fontWeight="lighter">{time}</ContentsText>
            <ContentsText fontSize="1.4em" fontWeight="bolder">{data.main.temp}&deg;C</ContentsText>
            
            <WeatherContainer>
                <Weather>
                    <WeatherImage src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt={``}/>
                    <div>
                        <ContentsText fontSize='1em' fontWeight='bold'>{data.weather[0].main}</ContentsText>
                        <ContentsText fontSize='0.8em' fontColor='#555'>{data.weather[0].description}</ContentsText>
                    </div>
                </Weather>
            </WeatherContainer>

            <WeatherInformations>
                <ContentsText fontSize="0.8em" fontWeight="lighter">Atmospheric Pressure: {data.main.pressure} hPa</ContentsText>
                <ContentsText fontSize="0.8em" fontWeight="lighter">Humidity: {data.main.humidity}%</ContentsText>
                <ContentsText fontSize="0.8em" fontWeight="lighter">Cloudiness: {data.clouds.all}%</ContentsText>
                <ContentsText fontSize="0.8em" fontWeight="lighter">Wind Direction: {data.wind.deg}&deg;</ContentsText>
                <ContentsText fontSize="0.8em" fontWeight="lighter">Wind Speed: {data.wind.speed} m/s</ContentsText>
            </WeatherInformations>
        </SingleDayWeatherContainer>
    )
}

export default SingleDayWeather
