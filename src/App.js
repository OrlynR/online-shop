import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Shop from './Module/Shop'
import PublicRoute from './Module/PublicRoute'

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Shop />
          </Route>
          <PublicRoute 
           path='/home'
           component={Shop}
          />

        </Switch>
      </Router>
  )
}

export default App
