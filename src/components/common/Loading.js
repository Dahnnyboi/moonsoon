import React from 'react'
import styled from 'styled-components'
import { ContentsText } from '../../assets/stylesheets/common'

const LoadingComponent = styled.div`
    display: flex;
    width: 100%;
    height: 94vh;

    justify-content: center;
    align-items: center;
`

function Loading() {
    return (
        <LoadingComponent>
            <ContentsText fontSize="1.2em">Loading...</ContentsText>
        </LoadingComponent>
    )
}

export default Loading
