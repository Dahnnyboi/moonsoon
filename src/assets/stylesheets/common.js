import styled from 'styled-components'
import { Swiper } from 'swiper/react'

export const ErrorHeader = styled.h1`
    color: #DC2626;
    font-size: ${props => props.fontSize || "1em"};
    text-align: center;
    font-weight: bold;
`

export const ContentsText = styled.p`
    font-size: ${props => props.fontSize || '1em'};
    font-weight: ${props => props.fontWeight || 'normal'};
    color: ${props => props.fontColor || '#050505'};
    padding: ${props => props.padding || '0px'};
`

export const WeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8px;
`

export const Weather = styled.div`
    margin-top: 4px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const WeatherImage = styled.img`
    width: 42px;
    height: 42px;
    margin-right: 8px;
`

export const WeatherInformations = styled.div`
    margin-top: 12px;
`

export const SingleDayWeatherContainer = styled.div`
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 12px 0 rgba(0, 0, 0, 0.19);
    padding: 24px;
    margin: 12px 2px;
`

export const SwiperContainer = styled(Swiper)`
    padding: ${props=> props.padding || "16px"}
`