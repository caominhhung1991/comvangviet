import React, {Component} from 'react'
import './NewsItem.scss'
import PropTypes from 'prop-types'

const propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
}

class NewsItem extends Component {
  render() {
    return (
      <div className="NewsItem">
        <div className="NewsItem__Header">
          <img
            className="NewsItem__Image"
            src={this.props.image}
            alt={"tin tuc"}/>
        </div>

        <div className="NewsItem__Tag">TIN TỨC</div>

        <div className="NewsItem__Title">
          {this.props.title}
        </div>

        <div className="NewsItem__Footer">
          <span className="NewsItem__Footer__Datetime">May 07, 2018</span>
          <span className="NewsItem__Footer__Like">
            Thích 0
          </span>
        </div>
      </div>
    )
  }
}

NewsItem.propTypes = propTypes

export default NewsItem
