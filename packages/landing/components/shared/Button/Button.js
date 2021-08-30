import React, {Component} from 'react'
import './Button.scss'
import PropTypes from 'prop-types'

const propTypes = {
  text: PropTypes.string,
}


export class Button extends Component {
  render() {
    return (
      <button className="Btn">
        {this.props.text}
      </button>
    )
  }
}

Button.propTypes = propTypes;

export default Button
