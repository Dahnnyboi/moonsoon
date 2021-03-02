import React, { useContext } from 'react'
import styled from 'styled-components'
import { CurrentContext } from '../../../context/contexts'
import { LoadingContainer, LoadingComponents, LoadingWeather, LoadingWeatherImage } from '../../../assets/stylesheets/Loadings'
import { 
    ContentsText,
    WeatherContainer,
    Weather,
    WeatherImage,
    WeatherInformations
} from '../../../assets/stylesheets/common'
import { TABLET_SCREEN, MEDIUM_DESKTOP_SCREEN } from '../../../assets/stylesheets/constants'

const CurrentContentsComponent = styled.div`
    width: 100%;

    @media(min-width: ${TABLET_SCREEN}){
        width: 50%;
    }

    @media(min-width: ${MEDIUM_DESKTOP_SCREEN}){
        width: 70%;
    }
`

function CurrentContents() {
    const { currentState } = useContext(CurrentContext)

    return (
        <CurrentContentsComponent>
            {
                currentState.loading ?
                    <LoadingContainer>
                        <LoadingComponents height='12px' width='20%' />
                        <LoadingComponents height="36px" width='25%' />
                        <LoadingWeather>
                            <LoadingWeatherImage height="42px" width="42px" />
                            <LoadingComponents height="42px" width="25%"/>
                        </LoadingWeather>
                        <LoadingComponents height="16px" width='50%' />
                        <LoadingComponents height="16px" width='50%' />
                        <LoadingComponents height="16px" width='50%' />
                        <LoadingComponents height="16px" width='50%' />

                    </LoadingContainer>
                    : 
                    <div>
                        <ContentsText fontSize="1.4em" fontWeight="bolder" padding="0 0 6px 0">Todays Weather</ContentsText>
                        <ContentsText fontSize="0.8em" fontWeight="lighter">{currentState.data.name}</ContentsText>
                        <ContentsText fontSize="1.8em" fontWeight="bold">{currentState.data.main.temp}&deg;C</ContentsText>
                        <WeatherContainer>
                            {
                                currentState.data.weather.map((wthr, idx) => {
                                    return (
                                        <Weather key={idx}>
                                            <WeatherImage src={`http://openweathermap.org/img/wn/${wthr.icon}@4x.png`} alt={``}/>
                                            <div>
                                                <ContentsText fontSize='1em' fontWeight='bold'>{wthr.main}</ContentsText>
                                                <ContentsText fontSize='0.8em' fontColor='#555'>{wthr.description}</ContentsText>
                                            </div>
                                        </Weather>
                                    )
                                })
                            }
                        </WeatherContainer>    
                        <WeatherInformations>
                            <ContentsText fontSize="0.8em" fontWeight="lighter">Atmospheric Pressure: {currentState.data.main.pressure} hPa</ContentsText>
                            <ContentsText fontSize="0.8em" fontWeight="lighter">Humidity: {currentState.data.main.humidity}%</ContentsText>
                            <ContentsText fontSize="0.8em" fontWeight="lighter">Cloudiness: {currentState.data.clouds.all}%</ContentsText>
                            <ContentsText fontSize="0.8em" fontWeight="lighter">Wind Direction: {currentState.data.wind.deg}&deg;</ContentsText>
                            <ContentsText fontSize="0.8em" fontWeight="lighter">Wind Speed: {currentState.data.wind.speed} m/s</ContentsText>
                            </WeatherInformations>
                    </div> 
            }
        </CurrentContentsComponent>
    )
}

export default CurrentContents
