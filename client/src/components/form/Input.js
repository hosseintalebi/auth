import React, { Component } from 'react'
import _ from 'lodash'

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
    const { value, placeholder, type, error, showError } = this.props
    const inputStyle = showError && error ? styles.inputWithError : styles.input
    const placeholderStyle = _.size(value) ? styles.placeholderTop : styles.placeholder
    return (
      <div className={styles.inputContainer}>
        <div className={placeholderStyle}>{placeholder}</div>
        <input
          className={inputStyle}
          type={type}
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
