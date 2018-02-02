import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Signin from './views/signin/signin'
import Signup from './views/signup/signup'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/signin`} component={Signin} />
        <Route path={`${process.env.PUBLIC_URL}/signup`} component={Signup} />
        <Route path={`${process.env.PUBLIC_URL}/`} component={Signin} />
      </Switch>
    )
  }
}

export default App
