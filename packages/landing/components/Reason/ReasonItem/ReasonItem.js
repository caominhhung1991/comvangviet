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
  "nguon_thuc_pham_an_toan":  'https://timviec365.vn/pictures/news/2019/11/09/iqu1573274184.jpg',
  "dich_vu_linh_hoat":        'https://cdn.luatvietnam.vn/uploaded/Images/Standard/2020/02/21/co-cau-lai-nganh-dich-vu-2020_2102132747.png',
  "kinh_nghiem_va_uy_tinh":   'https://topviec.vn/wp-content/uploads/2019/12/k%E1%BB%B9-n%C4%83ng-ng%C3%A0nh-d%E1%BB%8Bch-v%E1%BB%A5.jpg',
  "khach_hang_la_trong_tam":  'https://cempartner.com/FileUpload/Images/dichvukhachhangtot.jpg',
  "luon_luon_cai_tien":       'https://crmviet.vn/wp-content/uploads/2019/09/y-tuong-cai-tien-cong-viec.jpg',
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
