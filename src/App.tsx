import React from 'react';
import styled from 'styled-components';
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

const Nav = styled.nav`
  border: 1px solid blue;
  > ul{
    display: flex;
    >li{
      width: 33.33%;
      text-align: center;
      padding: 16px;
    }
  }
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
      <Nav>
      <ul>
        <li><Link to="/tags">标签页</Link></li>
        <li><Link to="/money">记账页</Link></li>
        <li><Link to="/statistics">统计页</Link></li>
      </ul>
      </Nav>
    </Wrapper>
  </Router>
)
export default App;
