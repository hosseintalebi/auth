import React, { Component } from 'react'

import styles from './styles.css'

export default class Button extends Component {
  render() {
    const { text, onClick } = this.props
    return (
      <button className={styles.button} onClick={onClick}>
        {text}
      </button>
    )
  }
}
