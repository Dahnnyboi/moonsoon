import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './assets/stylesheets/global'
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home';
import Query from './pages/Query'

import styled from 'styled-components'
import Navbar from './components/common/Navbar';

const ContentWrapper = styled.div`
  height: 94vh;
`

const RouteWrapper = function({ children, ...rest}) {
  return(
    <Route {...rest}>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Route>
  )
}

const ApplicationRoutes = function() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <RouteWrapper exact path="/">
          <Home />
        </RouteWrapper>
        <RouteWrapper path="/query">
          <Query />
        </RouteWrapper>
        <RouteWrapper path="*">
          <div>404</div>
        </RouteWrapper>
      </Switch>
    </Router>
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
