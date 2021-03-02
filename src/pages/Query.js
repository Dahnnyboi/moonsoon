import React, { useContext } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Wrapper from '../assets/stylesheets/Wrapper'
import Search from '../components/Query/Search'
import Contents from '../components/Query/Contents'
import FiveDaysWeather from '../components/Query/FiveDaysWeather'
import Error from '../components/Query/Error'
import useQuery from '../utils/hooks/useQuery'
import useGetCurrentCity from '../utils/hooks/useGetCurrentCity'

import { ThemeContext, CurrentContext } from '../context/contexts'

const QueryContainer = styled.div`
    height: 100%;
    display: flex;
    padding-top: 24px;

    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function Query() {
    const { themeState } = useContext(ThemeContext)
    const { currentState } = useContext(CurrentContext)
    const query = useQuery()
    useGetCurrentCity(query.get('city'))

    return (
        <ThemeProvider theme={{ main: themeState }}>
            <Wrapper>
                <QueryContainer>
                    <Search />
                    {
                        currentState.error !== "" ?
                            <Error message={currentState.error}/>
                            :
                            <>
                                <Contents city={query.get('city')}/>
                                <FiveDaysWeather />
                            </>
                    }
                </QueryContainer>
            </Wrapper>
        </ThemeProvider>
    )
}

export default Query
