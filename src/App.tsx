import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import routes from './routes'
import { Lines } from 'react-preloaders'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Layout>
            {routes.map((route) => {
              return (
                <Route
                  path={route.path}
                  key={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              )
            })}
          </Layout>
        </Switch>
      </Router>
      <Lines />
    </>
  )
}

export default App
