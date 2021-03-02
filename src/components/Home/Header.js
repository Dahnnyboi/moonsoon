import React, { useContext } from 'react'
import styled from 'styled-components'
import { coldColor, transColdColor, warmColor, transWarmColor } from '../../assets/stylesheets/constants'
import { coldAnimation, warmAnimation } from '../../assets/stylesheets/Animation'

import { TABLET_SCREEN, SMALL_LAPTOP_SCREEN } from '../../assets/stylesheets/constants'
import { ThemeContext } from '../../context/contexts'

import natureCold from '../../assets/images/nature_cold.svg'
import natureWarm from '../../assets/images/nature_warm.svg'

const HeaderWrapper = styled.div`
    width: 100%;
    padding: 8px;
    display: flex;

    text-align: center;
    margin-bottom: 24px;

    @media(min-width: ${TABLET_SCREEN}){
        width: 70%;
        text-align: left;
        margin-bottom: 0;
    }
    @media(min-width: ${SMALL_LAPTOP_SCREEN}){
        width: 66.64%;
    }
`
const HeaderImage = styled.img`
    width: 76px;
    height: 76px;
    
    margin-right: 8px;
`

const HeaderDescription = styled.div`
    flex-grow: 1;
`

const HeaderText = styled.h1`
    font-size: 3em;
    font-weight: bold;
    animation: ${props => props.theme.main === 'cold' ? coldAnimation : warmAnimation} 1.8s ease-in-out;
    color: ${props => props.theme.main === 'cold' ? coldColor : warmColor}
`
const SecondaryText = styled.p`
    font-size: 1.2em;
    font-weight: 400;
    animation: ${props => props.theme.main === 'cold' ? coldAnimation : warmAnimation} 1.8s ease-in-out;
    color: ${props => props.theme.main === 'cold' ? transColdColor : transWarmColor}
`

function Header() {
    const { themeState } = useContext(ThemeContext)
    const isColdTheme = themeState === 'cold' 

    return (
        <HeaderWrapper>
            <HeaderImage src={isColdTheme ? natureCold : natureWarm }/>
            <HeaderDescription>
                <HeaderText>Moonsoon</HeaderText>
                <SecondaryText>Simple weather application</SecondaryText>
            </HeaderDescription>       
        </HeaderWrapper>
    )
}

export default Header
