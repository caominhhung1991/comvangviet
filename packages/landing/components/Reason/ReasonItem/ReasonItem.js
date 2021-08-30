import React, {Component} from 'react'
import './ReasonItem.scss'

import PropTypes from 'prop-types'
import Button from '../../shared/Button/Button';

const reasonImage = '/static/img/reason_1.jpg'

const propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string.isRequired,
}

const imageMap = {
  "chat_luong_tieu_chuan": reasonImage,
  "nguon_thuc_pham_an_toan":  'https://atvstp.org.vn/wp-content/uploads/2018/12/anh-1-kiem-dinh-ve-sinh-an-toan-thuc-pham-la-qua-trinh-bat-buoc-v%C3%A0-thiet-thuc.png',
  "dich_vu_linh_hoat":        'https://atvstp.org.vn/wp-content/uploads/2018/12/anh-1-kiem-dinh-ve-sinh-an-toan-thuc-pham-la-qua-trinh-bat-buoc-v%C3%A0-thiet-thuc.png',
  "kinh_nghiem_va_uy_tinh":   'https://atvstp.org.vn/wp-content/uploads/2018/12/anh-1-kiem-dinh-ve-sinh-an-toan-thuc-pham-la-qua-trinh-bat-buoc-v%C3%A0-thiet-thuc.png',
  "khach_hang_la_trong_tam":  'https://atvstp.org.vn/wp-content/uploads/2018/12/anh-1-kiem-dinh-ve-sinh-an-toan-thuc-pham-la-qua-trinh-bat-buoc-v%C3%A0-thiet-thuc.png',
  "luon_luon_cai_tien":       'https://atvstp.org.vn/wp-content/uploads/2018/12/anh-1-kiem-dinh-ve-sinh-an-toan-thuc-pham-la-qua-trinh-bat-buoc-v%C3%A0-thiet-thuc.png',
}

//

export class ReasonItem extends Component {
  render() {
    return (
      <div
        className="ReasonItem"
        data-aos="fade-up"
        data-aos-duration="1400"
      >
        <div
          className="ReasonItem__Image"
          style={{backgroundImage: `url(${imageMap[this.props.image]})`}}>
        </div>

        <div className="ReasonItem__Title">
          {this.props.title}
        </div>

        <div className="ReasonItem__Content">
          {this.props.content}
        </div>

        {/*<Button text={"XEM THÊM"}/>*/}
      </div>
    )
  }
}

ReasonItem.propTypes = propTypes

export default ReasonItem
