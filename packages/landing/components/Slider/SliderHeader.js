import React, {Component} from 'react'
import './SliderHeader.scss'
import Swiper from 'swiper'

// const suatAnCN = 'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fsuat-an-cong-nghiep-osac-slider.jpg?alt=media&token=5eda7a46-934d-47c8-ac5f-39a932c44d2d'
const suatAnCN = 'https://www.inoxhimalaya.com.vn/wp-content/uploads/2018/08/khong-gian-bep-tan-dung-nguon-nang-luong.png'
const chucTetOsac = 'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fosac-chuc-tet.jpg?alt=media&token=c655cd0c-6473-4fd0-a911-9d42da2bd4d2'
const tuyenDung = 'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fbanner%2Ftuyen-dung.png?alt=media&token=3cc61405-278f-4cfc-bad3-c908ba5bf136'

const chucTetSlide = <div className="swiper-slide" style={{'backgroundImage': `url(${chucTetOsac})`}}>
  <div className="chucTetContent">
    <div className="text text-center" data-swiper-parallax="-300">
      <div>Năm hết tết đến - Rước lộc vào nhà</div>
      <div>Quà cáo bao la - Mọi nhà no đủ</div>
      <div>Vàng bạc đầy tủ - Gia chủ phát tài</div>
      <div>Già trẻ gái trai - Xum vầy hạnh phúc</div>
      <div>Cầu tài chúc phúc - Mãi mãi an khang</div>
    </div>
  </div>
</div>

const mungNgay8Thang3Silde = <div className="swiper-slide" style={{'backgroundImage': `url(${chucTetOsac})`}}>
  <div className="chucTetContent">
    <div className="text text-center" data-swiper-parallax="-300">
      <div>Năm hết tết đến - Rước lộc vào nhà</div>
      <div>Quà cáo bao la - Mọi nhà no đủ</div>
      <div>Vàng bạc đầy tủ - Gia chủ phát tài</div>
      <div>Già trẻ gái trai - Xum vầy hạnh phúc</div>
      <div>Cầu tài chúc phúc - Mãi mãi an khang</div>
    </div>
  </div>
</div>

const tuyenDungSilde = <div className="swiper-slide" style={{'backgroundImage': `url(${tuyenDung})`}}>
  <div className="SwiperSlide__Content">
    <div className="title OsacColor" data-swiper-parallax="-700">Thông Báo Tuyển Dụng</div>
    <div className="text text-center" data-swiper-parallax="-300">
      <p>Công ty Cơm Vàng Việt thông báo tuyển dụng để đáp ứng nhu cầu mở rộng kinh doanh tại các khu vực Bình Dương, Đồng Nai, Quận 9.</p>
      <a href="/tuyen-dung">Xem chi tiết</a>
    </div>
  </div>
</div>

const suatAnCNSlide = <div className="swiper-slide" style={{'backgroundImage': `url(${suatAnCN})`}}>
  <div className="SwiperSlide__Content">
    <div className="title OsacColor" data-swiper-parallax="-700">Bếp Ăn Công Nghiệp</div>
    <div className="text" data-swiper-parallax="-300">
      <p>Với đội ngũ nhân sự quản lý bếp, đầu bếp, nhân viên sơ chế và chế biến suất ăn được đào tạo bài bản trong và ngoài nước, có chuyên môn cao và nhiều
        kinh nghiệm từ các khách sạn đẳng cấp, Cơm Vàng Việt đang cung cấp hàng chục nghìn suất ăn sáng và ăn trưa mỗi ngày cho các khách hàng.</p>
    </div>
  </div>
</div>

class SliderHeader extends Component {
  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {/*{tuyenDungSilde}*/}

          {suatAnCNSlide}
        </div>
        <div className="swiper-pagination swiper-pagination-white"/>
        <div className="swiper-button-next swiper-button-white"/>
        <div className="swiper-button-prev swiper-button-white"/>
      </div>
    )
  }

  componentDidMount = () => {
    new Swiper('.swiper-container', {
      spaceBetween: 0,
      speed: 1000,
      // effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }
}

export default SliderHeader
