import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ColdTheme, WarmTheme } from '../assets/stylesheets/Theme'
import { coldAnimation, warmAnimation } from '../assets/stylesheets/Animation'
import { coldColor, warmColor } from '../assets/stylesheets/constants'
import Wrapper from '../assets/stylesheets/Wrapper'

import Header from '../components/Home/Header'
import Contents from '../components/Home/Contents'

function Home() {
  return (
    <Wrapper display='flex'>
      <Header />
      <Contents />
    </Wrapper>
  );
}

export default Home;
