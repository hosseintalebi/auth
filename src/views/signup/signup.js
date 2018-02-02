import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// containers
import signupContainer from 'containers/signup/signupContainer'

// components
import { Input, Button } from 'components/form/'

// constants
import { Errors } from 'data/signup/constants'

// styles
import styles from './styles.css'

class Signup extends Component {
  constructor() {
    super()
    this.onChangeFirstName = this.onChangeFirstName.bind(this)
    this.onChangeLastName = this.onChangeLastName.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassowrd = this.onChangePassowrd.bind(this)
    this.onChangeRepeatPassword = this.onChangeRepeatPassword.bind(this)
    this.onClick = this.onClick.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChangeFirstName(value) {
    const { onChangeFirstName } = this.props
    onChangeFirstName({ value })
  }

  onChangeLastName(value) {
    const { onChangeLastName } = this.props
    onChangeLastName({ value })
  }

  onChangeUsername(value) {
    const { onChangeUsername } = this.props
    onChangeUsername({ value })
  }

  onChangeEmail(value) {
    const { onChangeEmail } = this.props
    onChangeEmail({ value })
  }

  onChangePassowrd(value) {
    const { onChangePassowrd } = this.props
    onChangePassowrd({ value })
  }

  onChangeRepeatPassword(value) {
    const { onChangeRepeatPassword } = this.props
    onChangeRepeatPassword({ value })
  }

  onClick() {
    const { onSignup } = this.props
    onSignup()
  }

  onSubmit(event) {
    event.preventDefault()
    this.onClick()
  }

  render() {
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      repeatPassword,
      errors,
      submitted,
    } = this.props
    return (
      <div className={styles.signupContainer}>
        <div className={styles.header}>Sign Up</div>
        <form onSubmit={this.onSubmit}>
          <div className={styles.formContent}>
            <Input
              type={Input.Types.Text}
              value={firstname}
              onChange={this.onChangeFirstName}
              placeholder={'First name'}
              error={errors[Errors.Firstname]}
              showError={submitted}
            />
            <Input
              type={Input.Types.Text}
              value={lastname}
              onChange={this.onChangeLastName}
              placeholder={'Last name'}
              error={errors[Errors.Lastname]}
              showError={submitted}
            />
            <Input
              type={Input.Types.Text}
              value={username}
              onChange={this.onChangeUsername}
              placeholder={'Username'}
              error={errors[Errors.Username]}
              showError={submitted}
            />
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
            <Input
              type={Input.Types.Password}
              value={repeatPassword}
              onChange={this.onChangeRepeatPassword}
              placeholder={'Repeat password'}
              error={errors[Errors.RepeatPassword]}
              showError={submitted}
            />
            <Button text="Sign Up" onClick={this.onClick} />
            <div>
              Already have an account? Click here to{' '}
              <Link to="/signin">sign in</Link>.
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default signupContainer(Signup)