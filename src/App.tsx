import React from 'react';
import Layout from './components/Layout';
import {
    HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'



const Money = () => (
  <Layout>
      <h2>记账页面</h2>
    </Layout>
)

const Statistics = () => (
  <Layout>
    <h2>统计页面</h2>
  </Layout>
)


const Tags = () => (
  <Layout>
    <h2>标签页面</h2>
  </Layout>
)

const NoMatch = ()=>(
  <div>
    <h2>页面不存在，请检查地址</h2>
  </div>
)
const App = () => (
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
)
export default App;
