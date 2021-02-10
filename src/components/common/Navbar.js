import React from 'react'
import { Link } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'

import { ColdTheme } from '../../assets/stylesheets/Theme'
import { coldColor, warmColor } from '../../assets/stylesheets/constants'
import Wrapper from '../../assets/stylesheets/Wrapper' 

const NavbarComponent = styled.div`
    height: 6vh;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const NavbarHeader = styled(Link)`
    font-size: 1.2em;
    font-weight: bold;
    text-decoration: none;
    color: ${props => props.theme.main === 'cold' ? coldColor : warmColor};
`

function Navbar() {
    return (
        <ThemeProvider theme={ColdTheme}>
            <NavbarComponent>
                <Wrapper display='flex'>
                    <NavbarHeader to="/">Moonsoon</NavbarHeader>
                </Wrapper>
            </NavbarComponent>
        </ThemeProvider>
    )
}

export default Navbar
