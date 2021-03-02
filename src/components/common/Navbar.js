import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { ThemeContext } from '../../context/contexts'
import { coldAnimation, warmAnimation } from '../../assets/stylesheets/Animation'

import { coldColor, warmColor } from '../../assets/stylesheets/constants'
import Wrapper from '../../assets/stylesheets/Wrapper' 

const NavbarComponent = styled.div`
    height: 6vh;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const NavbarContainer = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
`

const NavbarHeader = styled(Link)`
    font-size: 1.2em;
    font-weight: bold;
    text-decoration: none;
    animation: ${props => props.theme.main === 'cold' ? coldAnimation : warmAnimation} 1.8s ease-in-out;
    color: ${props => props.theme.main === 'cold' ? coldColor : warmColor};
`

function Navbar() {
    const themeContext = useContext(ThemeContext)

    return (
        <ThemeProvider theme={{ main: themeContext.themeState }}>
            <NavbarComponent>
                <Wrapper>
                    <NavbarContainer>
                        <NavbarHeader to="/">Moonsoon</NavbarHeader>
                    </NavbarContainer>
                </Wrapper>
            </NavbarComponent>
        </ThemeProvider>
    )
}

export default Navbar
