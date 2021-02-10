import styled from 'styled-components'
import {
    TABLET_SCREEN,
    SMALL_LAPTOP_SCREEN,
    LARGE_LAPTOP_SCREEN,
    LARGE_DESKTOP_SCREEN
} from './constants'

const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;

    height: 100%;
    
    @media(min-width: ${TABLET_SCREEN}){
        display: ${props => props.display || 'block'};
        align-items: ${props => props.alignItems || 'center'};
        justify-content: ${props => props.justifyContent || 'flex-start'};
        width: 91.63%
    }

    @media(min-width: ${SMALL_LAPTOP_SCREEN}){
        width: 83.33%
    }

    @media(min-width: ${LARGE_LAPTOP_SCREEN}){
        width: 74.97%
    }

    @media(min-width: ${LARGE_DESKTOP_SCREEN}){
        width: 66.64%
    }
`

export default Wrapper