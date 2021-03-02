import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { 
    transColdColor, 
    transWarmColor,
    coldColor,
    warmColor,
    whiteColor,
    LARGE_DESKTOP_SCREEN, 
} from '../../assets/stylesheets/constants'
import { coldAnimationBg, warmAnimationBg } from '../../assets/stylesheets/Animation'
import { TABLET_SCREEN, SMALL_LAPTOP_SCREEN } from '../../assets/stylesheets/constants'

const SearchComponent = styled.div`
    width: 100%;
    display: flex;

    @media(min-width: ${TABLET_SCREEN}){
        width: 75%;
    }

    @media(min-width: ${SMALL_LAPTOP_SCREEN}){
        width: 50%;
    }
    @media(min-width: ${LARGE_DESKTOP_SCREEN}){
        width: 33.33%;
    }
`

const SearchInput = styled.input`
    flex-grow: 1;
    padding: 8px 6px;
    border: solid 2px ${props => props.theme.main === 'cold' ? transColdColor : transWarmColor};
    border-radius: 4px;

    &:focus {
        outline: none;
    }
`
const SearchSubmit = styled(Link)`
    border-radius: 3px;
    padding: 10px 22px;
    margin-left: 8px;
    text-decoration: none;
    text-align:center;
    font-weight: bold;
    animation: ${props => props.theme.main === 'cold' ? coldAnimationBg : warmAnimationBg} 1.8s ease-in-out;
    background-color: ${props => props.theme.main === 'cold' ? coldColor : warmColor};
    color: ${whiteColor};
`

function Search() {
    const [query, setQuery] = useState('')

    return (
        <SearchComponent>
            <SearchInput type="text" placeholder="City, Location" value={query} onChange={(e) => { setQuery(e.target.value) }}/>
            <SearchSubmit to={`/query?city=${query}`}>Submit</SearchSubmit>
        </SearchComponent>
    )
}

export default Search
