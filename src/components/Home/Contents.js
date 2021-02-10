import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
    transColdColor, 
    transWarmColor,
    whiteColor, 
} from '../../assets/stylesheets/constants'
import { ColdTheme, WarmTheme } from '../../assets/stylesheets/Theme'
import styled, { ThemeProvider } from 'styled-components'

const ContentsComponent = styled.div`
    width: 41.65%;
    padding: 16px;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: ${whiteColor}
`
const InputQuery = styled.input`
    display: block;
    padding: 10px 8px;
    width: 100%;
    border: solid 2px ${props => props.theme.main === 'cold' ? transColdColor : transWarmColor};;
    border-radius: 4px;
    margin-bottom: 8px;

    &:focus {
        outline: none;
    }
`

const QueryLink = styled(Link)`
    display: block;
    border-radius: 2px;
    padding: 8px;
    text-decoration: none;
    text-align:center;
    font-weight: bold;
    width: 100%;
    background-color: ${props => props.theme.main === 'cold' ? transColdColor : transWarmColor};
    color: ${whiteColor}
`

function Contents() {
    const [query, setQuery] = useState('')

    return (
        <ContentsComponent>
            <ThemeProvider theme={ColdTheme}>
                <InputQuery type="text" placeholder="City, Location" value={query} onChange={(e) => { setQuery(e.target.value) }}/>
                <QueryLink to="/query">Get weather updates</QueryLink>
            </ThemeProvider>
        </ContentsComponent>
    )
}

export default Contents
