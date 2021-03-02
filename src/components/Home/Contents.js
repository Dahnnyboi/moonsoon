import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { 
    transColdColor, 
    transWarmColor,
    coldColor,
    warmColor,
    whiteColor, 
} from '../../assets/stylesheets/constants'
import {
    ErrorHeader,
    ContentsText,
    WeatherContainer,
    Weather,
    WeatherImage
} from '../../assets/stylesheets/common'
import styled from 'styled-components'
import { coldAnimationBg, warmAnimationBg } from '../../assets/stylesheets/Animation'
import { LoadingContainer, LoadingComponents } from '../../assets/stylesheets/Loadings'

import useGetCurrent from '../../utils/hooks/useGetCurrent'
import useConvertUnix from '../../utils/hooks/useConvertUnix'
import { CurrentContext } from '../../context/contexts'

import { TABLET_SCREEN, SMALL_LAPTOP_SCREEN } from '../../assets/stylesheets/constants'

const ContentsComponent = styled.div`
    width: 100%;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: ${whiteColor}

    @media(min-width: ${TABLET_SCREEN}){
        width: 30%;
    }
    @media(min-width: ${SMALL_LAPTOP_SCREEN}){
        width: 33.36%;
    }
`

const InputQuery = styled.input`
    display: block;
    padding: 10px 8px;
    width: 100%;
    border: solid 2px ${props => props.theme.main === 'cold' ? transColdColor : transWarmColor};;
    border-radius: 4px;
    margin-bottom: 8px;

    &:focus {
        outline: none;
    }
`

const QueryLink = styled(Link)`
    display: block;
    border-radius: 2px;
    padding: 8px;
    text-decoration: none;
    text-align:center;
    font-weight: bold;
    width: 100%;
    animation: ${props => props.theme.main === 'cold' ? coldAnimationBg : warmAnimationBg} 1.8s ease-in-out;
    background-color: ${props => props.theme.main === 'cold' ? coldColor : warmColor};
    color: ${whiteColor}
`

const ContentsContainer = styled.div`
    margin: 4px 0 12px 0px;
`

function Contents() {
    const { currentState } = useContext(CurrentContext)
    const [query, setQuery] = useState('')

    useGetCurrent()
    const currentTime = useConvertUnix(currentState.data.dt || 0)

    return (
        <ContentsComponent>
            {
                currentState.error !== "" ?
                    <ErrorHeader>
                        { currentState.error }
                    </ErrorHeader>
                    :
                    currentState.loading ?
                        <LoadingContainer>
                            <LoadingComponents height='64px' width='50%'/>
                            <LoadingComponents height='24px' width='100%'/>
                            <LoadingComponents height='24px' width='100%'/>
                        </LoadingContainer>
                        :
                        <ContentsContainer>
                            <ContentsText fontSize='2.4em' fontWeight='300'>{ Math.ceil(currentState.data.main.temp) || 0 }&deg;C</ContentsText>
                            <ContentsText fontSize='1em' fontWeight='bold' fontColor='#555'>{ currentTime }</ContentsText>
                            <ContentsText fontSize='0.8em' fontWeight='300' fontColor='#555'>{ currentState.data.name }</ContentsText>

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
                        </ContentsContainer>
                }
            <InputQuery type="text" placeholder="City, Location" value={query} onChange={(e) => { setQuery(e.target.value) }}/>
            <QueryLink to={`/query?city=${query}`}>Get weather updates</QueryLink>
        </ContentsComponent>
    )
}

export default Contents
