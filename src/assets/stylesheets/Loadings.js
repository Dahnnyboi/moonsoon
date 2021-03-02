import styled, { keyframes } from 'styled-components'
import { transColdColor, transWarmColor } from './constants'

const pulse =  keyframes`
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: .5;
    }
`

export const LoadingContainer = styled.div`
    animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    margin: 4px 0;
`

export const LoadingComponents = styled.div`
    background-color: ${props => props.theme.main === 'cold' ? transColdColor : transWarmColor};
    height: ${props => props.height};
    width: ${props => props.width};
    margin-bottom: 8px;
    border-radius: 2px;
`

export const LoadingWeather = styled.div`
    display: flex;
    padding: ${props => props.padding || '0 6px'};
    align-items: center;
`

export const LoadingWeatherImage = styled.div`
    background-color: ${props => props.theme.main === 'cold' ? transColdColor : transWarmColor};
    border-radius: 50%;
    height: ${props => props.height};
    width: ${props => props.width};
    margin: 6px 12px 6px 0px;
`

