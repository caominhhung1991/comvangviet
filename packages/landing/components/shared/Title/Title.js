import React, {Component} from 'react'
import './Title.scss'
import PropTypes from 'prop-types'

const propStyles = {
  title: PropTypes.string,
  dataAOS: PropTypes.bool,
}

class Title extends Component {
  render() {

    let content = <div/>;

    content = !!this.props.dataAOS ? (
        <div className="Title" data-aos={this.props.dataAOS}>
          <span className="Title__Line"/>
          <span className="Title__Text">{this.props.title}</span>
        </div>
      ) :
      (<div className="Title">
        <span className="Title__Line"/>
        <span className="Title__Text">{this.props.title}</span>
      </div>)

    return (
      content
    )
  }
}

Title.propStyles = propStyles

export default Title
