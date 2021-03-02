import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './assets/stylesheets/global'
import {
  BrowserRouter as Router, 
  Switch,
  Route,
} from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from './components/common/Loading'
import styled from 'styled-components'

import Navbar from './components/common/Navbar'
import { ThemeContext, CurrentContext, FiveDaysContext } from './context/contexts'
import { 
  initialThemeState,
  themeReducer,
  initialCurrentState,
  currentReducer,
  initialFivedaysState,
  fivedaysReducer
} from './context/reducers'

const ContentsWrapper = styled.div`
  height: 94vh;
`

const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: Loading
})

const Query = Loadable({
  loader: () => import('./pages/Query'),
  loading: Loading
})

const FourOFour = Loadable({
  loader: () => import('./pages/FourOFour'),
  loading: Loading
})

const ProviderWrapper = function({ children }) {
  const [theme, themeDispatch] = useReducer(themeReducer, initialThemeState)
  const [current, currentDispatch] = useReducer(currentReducer, initialCurrentState)
  const [fivedays, fivedaysDispatch] = useReducer(fivedaysReducer, initialFivedaysState)
  
  return(
    <FiveDaysContext.Provider value={{ fivedaysState: fivedays, fivedaysDispatch }}>
      <CurrentContext.Provider value={{ currentState: current, currentDispatch }}>
        <ThemeContext.Provider value={{ themeState: theme, themeDispatch }}>
          { children }
        </ThemeContext.Provider>
      </CurrentContext.Provider>      
    </FiveDaysContext.Provider>
  )
}

const ApplicationRoutes = function() {

  return (
    <ProviderWrapper>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <ContentsWrapper>
              <Home />
            </ContentsWrapper>
          </Route>
          <Route path="/query">
            <Query />
          </Route>
          <Route path="*">
            <ContentsWrapper>
              <FourOFour />
            </ContentsWrapper>
          </Route>
        </Switch>
      </Router>
    </ProviderWrapper>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ApplicationRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
