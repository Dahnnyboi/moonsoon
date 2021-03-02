import React from 'react'
import styled from 'styled-components'
import { ErrorHeader } from '../../assets/stylesheets/common'

const ErrorComponent = styled.div`
    margin-top: 24px;
`

function Error({ message }) {
    return (
        <ErrorComponent>
            <ErrorHeader fontSize="1.6em" fontWeight="bolder">{message}</ErrorHeader>
        </ErrorComponent>
    )
}

export default Error
