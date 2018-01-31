import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// containers
import signinContainer from 'containers/signin/signinContainer'

// components
import { Input, Button } from 'components/form/'

// styles
import styles from './styles.css'

class Signin extends Component {
  constructor() {
    super()
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangePassowrd = this.onChangePassowrd.bind(this)
    this.onClick = this.onClick.bind(this)
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
  render() {
    const { username, password } = this.props
    return (
      <div className={styles.signinContainer}>
        <div className={styles.header}>Sign In</div>
        <div className={styles.formContainer}>
          <Input
            type={Input.Types.Text}
            value={username}
            onChange={this.onChangeUsername}
            placeholder={'Username'}
          />
          <Input
            type={Input.Types.Password}
            value={password}
            onChange={this.onChangePassowrd}
            placeholder={'Password'}
          />
          <Button text="Sign In" onClick={this.onClick} />
          <div>
            Do not have an account? Click here to{' '}
            <Link to="/signup">sign up</Link>.
          </div>
        </div>
      </div>
    )
  }
}

export default signinContainer(Signin)
