import React, { useContext } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ThemeContext } from '../context/contexts'

import Wrapper from '../assets/stylesheets/Wrapper'

import Header from '../components/Home/Header'
import Contents from '../components/Home/Contents'
import { TABLET_SCREEN } from '../assets/stylesheets/constants'

const HomeContainer = styled.div`
  height: 100%;
  display: flex;

  flex-direction: column;
  justify-content: center;

  @media(min-width: ${TABLET_SCREEN}){
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`

function Home() {
  const { themeState } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={{ main: themeState }}>
      <Wrapper>
        <HomeContainer>
          <Header />
          <Contents />
        </HomeContainer>
      </Wrapper>
    </ThemeProvider>
  );
}

export default Home;
