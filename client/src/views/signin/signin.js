import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react-spinkit'
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
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassowrd = this.onChangePassowrd.bind(this)
    this.onClick = this.onClick.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChangeEmail(value) {
    const { onChangeEmail } = this.props
    onChangeEmail({ value })
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
    const { credentials, errors, submitted, isFetching, networkError } = this.props
    const { email, password } = credentials
    debugger
    return (
      <div className={styles.signinContainer}>
        <div className={styles.header}>Sign In</div>
        <form onSubmit={this.onSubmit}>
          <div className={styles.formContent}>
            <Input
              type={Input.Types.Text}
              value={email}
              onChange={this.onChangeEmail}
              placeholder={'Email'}
              error={errors[Errors.Email]}
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
            {isFetching ? (
              <div className={styles.spinner}>
                <Spinner name="double-bounce" />
              </div>
            ) : (
              <Button text="Sign In" type="submit" />
            )}
            {networkError && <div className={styles.error}>{networkError}</div>}
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
