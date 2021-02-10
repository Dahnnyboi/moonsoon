import { keyframes } from 'styled-components'
import { 
    coldColor, 
    transColdColor,
    warmColor,
    transWarmColor
} from './constants'

export const coldAnimation = keyframes`
    0% {
        background-color: ${transColdColor};
        opacity: 0.5;
    }
    25% {
        background-color: ${transColdColor};
        opacity: 1;
    }
    100% {
        background-color: ${coldColor};
    }
`

export const warmAnimation = keyframes`
    0% {
        background-color: ${transWarmColor};
        opacity: 0.5;
    }
    25% {
        background-color: ${transWarmColor};
        opacity: 1;
    }
    100%{
        background-color: ${warmColor};
    }
`