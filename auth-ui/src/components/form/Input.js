import React, { Component } from 'react'

import styles from './styles.css'

export default class Input extends Component {
  static Types = {
    Text: 'text',
    Password: 'password',
  }
  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  render() {
    debugger
    const { value, placeholder, type, error, showError } = this.props
    const inputStyle = showError && error ? styles.inputWithError : styles.input
    return (
      <div className={styles.inputContainer}>
        <input
          className={inputStyle}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={this.onChange}
          onKeyPress={this.handleKeyPress}
        />
        {showError && error && <div className={styles.inputError}>{error}</div>}
      </div>
    )
  }

  onChange({ target }) {
    const { onChange } = this.props
    onChange && onChange(target.value)
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      const { onPressEnter } = this.props
      onPressEnter && onPressEnter(this.props.inputText)
    }
  }
}
