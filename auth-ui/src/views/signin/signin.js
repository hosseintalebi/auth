import React, { Component } from 'react'

// containers
import siginContainer from 'containers/sigin/siginContainer'

// components
import Input from 'components/form/Input'

// styles
import styles from './styles.css'

class Signin extends Component {
  constructor() {
    super()
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangePassowrd = this.onChangePassowrd.bind(this)
  }
  onChangeUsername (value) {
    const { onChangeUsername } = this.props
    onChangeUsername({value})
  }
  onChangePassowrd (value) {
    const { onChangePassowrd } = this.props
    onChangePassowrd({value})
  }
  render () {
    const { username, password } = this.props
    return (
      <div className={styles.signinContainer}>
        <div className={styles.header}>
          Login
        </div>
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
        </div>
      </div>
    )
  }
}

export default siginContainer(Signin)
