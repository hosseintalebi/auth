import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react-spinkit'
// containers
import homeContainer from 'containers/home/homeContainer'

// components
import { Button } from 'components/form/'

class Home extends Component {
  constructor() {
    super()
    this.onSignout = this.onSignout.bind(this)
  }
  onSignout() {
    const { onSignout } = this.props
    onSignout()
  }

  render() {
    const { user } = this.props
    return (
      <div>
        {`Hello, ${user && user.firstname}`}
        <Button text="Sign Out" onClick={this.onSignout} />
      </div>
    )
  }
}

export default homeContainer(Home)
