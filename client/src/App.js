import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Signin from './views/signin/signin'
import Signup from './views/signup/signup'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Signin} />
      </Switch>
    )
  }
}

export default App
