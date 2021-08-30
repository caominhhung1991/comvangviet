import React, {Component} from 'react'
import './ItemService.scss'

const imageMap = {
  'can_tin': '/static/img/bep-truong-hoc.jpg',
  'bep_an_cong_nghiep': '/static/img/business-lunch.jpg',
  'to_chuc_tiec': '/static/img/pranzo-sociale.jpg',
  'dich_vu_khac': '/static/img/catering.png',
}

class ItemService extends Component {
  render() {
    return (
      <div
        className='ItemService'
        data-aos='flip-left'
        data-aos-duration='800'
        data-aos-easing='ease-in-out'
        data-aos-anchor-placement='top-bottom'
      >
        <div
          className='ItemService__Img'
          style={{backgroundImage: `url(${imageMap[this.props.image]})`}}
        />
        <div className='ItemService__Title'>
          {this.props.title}
        </div>
      </div>
    )
  }
}

export default ItemService
