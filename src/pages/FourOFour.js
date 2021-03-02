import React, { useContext } from 'react'
import { 
    transColdColor, 
    transWarmColor,
    coldColor,
    warmColor,
    whiteColor, 
} from '../assets/stylesheets/constants'
import styled, { ThemeProvider } from 'styled-components'
import { Link } from 'react-router-dom'
import { ContentsText } from '../assets/stylesheets/common'
import { ThemeContext } from '../context/contexts'

const FourOFourComponent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const HomeLink = styled(Link)`
    padding: 8px 16px;
    background-color: ${props => props.theme.main === 'cold' ? coldColor : warmColor};
    color: ${whiteColor};
    text-decoration: none;
    font-weight: bold;
    border-radius: 2px;
    margin-top: 16px;
    
    &:hover {
        background-color: ${props => props.theme.main === 'cold' ? transColdColor : transWarmColor};
    }
` 

function FourOFour() {
    const { themeState } = useContext(ThemeContext)

    return (
        <ThemeProvider theme={{ main: themeState }}>
            <FourOFourComponent>
                <ContentsText fontSize="1.6em" fontWeight="bolder">404 : URL not Found</ContentsText>
                <HomeLink to="/">Go Back to Home</HomeLink>
            </FourOFourComponent>
        </ThemeProvider>
    )
}

export default FourOFour
