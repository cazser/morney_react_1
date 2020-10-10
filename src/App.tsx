import React from 'react';
import styled from 'styled-components';
import Nav from './components/Nav';
import {
    HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`


const Main = styled.div`
flex-grow: 1;
over-flow: auto;
`

const Money = () => (
  <div>
    <h2>记账页面</h2>
  </div>
)

const Statistics = () => (
  <div>
    <h2>统计页面</h2>
  </div>
)


const Tags = () => (
  <div>
    <h2>标签页面</h2>
  </div>
)

const NoMatch = ()=>(
  <div>
    <h2>页面不存在，请检查地址</h2>
  </div>
)
const App = () => (
  <Router>
    <Wrapper>
      <Main>
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
      </Main>
      <Nav/>
    </Wrapper>
  </Router>
)
export default App;
