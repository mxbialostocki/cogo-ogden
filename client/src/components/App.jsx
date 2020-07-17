import React from 'react'
import { Route, Switch } from 'react-router-dom'

// component imports
import Countdown from './Countdown'

const App = () => {
  return (
    <React.Fragment>

      <Switch>
        <Route exact path='/'>
          <Countdown />
        </Route>
      </Switch>
    </React.Fragment>
  )
}

export default App
