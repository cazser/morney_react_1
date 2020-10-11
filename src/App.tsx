import React from 'react';
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import Money from 'views/Money';
import NoMatch from 'views/NoMatch';
import Statistics from 'views/Statistics';
import Tags from 'views/Tags';
import styled from 'styled-components';
const AppWrapper = styled.div`
  color:#333;
`
const App = () => (
<AppWrapper>
<Router>
      <Switch>
        <Route path="/tags">
          <Tags/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Redirect exact from="/" to="/money"/> 
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
  </Router>
  </AppWrapper>
)
export default App;
