import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Signin from './views/signin/signin'
import Signup from './views/signup/signup'
import Home from './views/home/home'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Home} />
      </Switch>
    )
  }
}

export default App
