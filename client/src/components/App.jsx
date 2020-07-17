import React from 'react'
import { Route, Switch } from 'react-router-dom'

// component imports
import Home from './Home'

const App = () => {
  return (
    <React.Fragment>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </React.Fragment>
  )
}

export default App
