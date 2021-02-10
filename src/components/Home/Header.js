import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { coldColor, transColdColor, warmColor, transWarmColor } from '../../assets/stylesheets/constants'
import { ColdTheme } from '../../assets/stylesheets/Theme'

const HeaderWrapper = styled.div`
    width: 58.35%;
    padding: 8px;
`

const HeaderText = styled.h1`
    font-size: 3em;
    font-weight: bold;
    color: ${props => props.theme.main === 'cold' ? coldColor : warmColor}
`
const SecondaryText = styled.p`
    font-size: 1.2em;
    font-weight: 400;
    color: ${props => props.theme.main === 'cold' ? transColdColor : transWarmColor}
`

function Header() {
    return (
        <ThemeProvider theme={ColdTheme}>
            <HeaderWrapper>
                
                <HeaderText>Moonsoon</HeaderText>
                <SecondaryText>Simple weather application</SecondaryText>
            </HeaderWrapper>
        </ThemeProvider>
    )
}

export default Header
