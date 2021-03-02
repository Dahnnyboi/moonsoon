import React from 'react'
import styled from 'styled-components'
import { TABLET_SCREEN } from '../../assets/stylesheets/constants'
import ChartContents from './contents/ChartContents'
import CurrentContents from './contents/CurrentContents'

const ContentsComponent = styled.div`
    width: 100%;
    display: flex;
    padding-top: 18px;
    flex-grow: 1;
    flex-direction: column;

    @media(min-width: ${TABLET_SCREEN}){
        flex-direction: row;
    }
`

function Contents({ city }) {
    return (
        <ContentsComponent>
            <CurrentContents city={city}/>
            <ChartContents city={city}/>
        </ContentsComponent>
    )
}

export default Contents
