import React, { Component } from 'react'

import styles from './styles.css'

export default class Input extends Component {
  static Types = {
    Text: 'text',
    Password: 'password',
  }
  constructor () {
    super()
    this.onChange = this.onChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  render () {
    const { value, placeholder, type } = this.props
    return (
      <input
        className={styles.textInput}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={this.onChange}
        onKeyPress={this.handleKeyPress}
      />
    )
  }

  onChange ({target}) {
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
