import { keyframes } from 'styled-components'
import { 
    coldColor, 
    transColdColor,
    warmColor,
    transWarmColor
} from './constants'

export const coldAnimation = keyframes`
    0% {
        color: ${transColdColor};
        opacity: 0.5;
    }
    25% {
        color: ${transColdColor};
        opacity: 1;
    }
    100% {
        color: ${coldColor};
    }
`

export const warmAnimation = keyframes`
    0% {
        color: ${transWarmColor};
        opacity: 0.5;
    }
    25% {
        color: ${transWarmColor};
        opacity: 1;
    }
    100%{
        color: ${warmColor};
    }
`


export const coldAnimationBg = keyframes`
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

export const warmAnimationBg = keyframes`
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