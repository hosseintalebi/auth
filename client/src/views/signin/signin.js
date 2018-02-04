import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// containers
import signinContainer from 'containers/signin/signinContainer'

// components
import { Input, Button } from 'components/form/'

// constants
import { Errors } from 'data/signin/constants'
// styles
import styles from './styles.css'

class Signin extends Component {
  constructor() {
    super()
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangePassowrd = this.onChangePassowrd.bind(this)
    this.onClick = this.onClick.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChangeUsername(value) {
    const { onChangeUsername } = this.props
    onChangeUsername({ value })
  }
  onChangePassowrd(value) {
    const { onChangePassowrd } = this.props
    onChangePassowrd({ value })
  }
  onClick() {
    const { onSignin } = this.props
    onSignin()
  }
  onSubmit(event) {
    event.preventDefault()
    this.onClick()
  }
  render() {
    const { username, password, errors, submitted } = this.props
    return (
      <div className={styles.signinContainer}>
        <div className={styles.header}>Sign In</div>
        <form onSubmit={this.onSubmit}>
          <div className={styles.formContent}>
            <Input
              type={Input.Types.Text}
              value={username}
              onChange={this.onChangeUsername}
              placeholder={'Username'}
              error={errors[Errors.Username]}
              showError={submitted}
            />
            <Input
              type={Input.Types.Password}
              value={password}
              onChange={this.onChangePassowrd}
              placeholder={'Password'}
              error={errors[Errors.Password]}
              showError={submitted}
            />
            <Button text="Sign In" onClick={this.onClick} />
            <div>
              Do not have an account? Click here to{' '}
              <Link to="/signup">sign up</Link>.
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default signinContainer(Signin)
