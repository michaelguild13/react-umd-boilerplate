// Node Modules
import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

// Sass
import './button.scss'

const propTypes = {
  text: PropTypes.string
}

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.text}
      </button>
    )
  }
}

Button.propTypes = propTypes

export default Button
