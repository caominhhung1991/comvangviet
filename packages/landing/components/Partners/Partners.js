import React, {Component} from 'react'
import './Partners.scss'
import Title from '../shared/Title/Title'
import Swiper from 'swiper'

const achau = 'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fparners%2Fachaucatering.gif?alt=media&token=a626119c-a911-4be4-93f8-218468522c78'
const ajinomoto = 'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fparners%2Fajinomoto.jpg?alt=media&token=694be3cb-c516-4f7b-bc9e-bf2ff9b9677d'
const bahuan = 'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fparners%2Fbahuan.jpg?alt=media&token=f0a84c15-16c7-4e00-bc3b-058adf4ed1c9'
const coca = 'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fparners%2Fcocacola.png?alt=media&token=e206e1d7-ed72-4332-a6e5-81b9f328a0b7'
const cp = 'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fparners%2Fcp.png?alt=media&token=200074bd-b74a-43c2-a803-80908ca2f8cf'
const metro = 'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fparners%2Fmetro.png?alt=media&token=9c3fea39-40d2-4bcb-91f7-ce4d0c15fed8'
const pepsi = 'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fparners%2Fpepsi.png?alt=media&token=c76a1b60-0e81-40d3-bc13-d77bee33efb0'

const partners = [
  achau, ajinomoto, bahuan, coca, cp, metro, pepsi,
  achau, ajinomoto, bahuan, coca, cp, metro, pepsi,
]

export class Partners extends Component {
  render() {
    return (
      <div className='Partners'>
        <Title title={'nhà cung cấp của chúng tôi'}/>
        <div className='swiper-container2'>
          <div className='swiper-wrapper SwiperWrapper'>
            {
              partners.map((url, index) => {
                return <div key={index} className='swiper-slide'>
                  <img src={url} alt='partner'/>
                </div>
              })
            }
          </div>
          <div className='swiper-pagination'/>
        </div>
      </div>
    )
  }

  componentDidMount = () => {
    let swiper2 = new Swiper('.swiper-container2', {
      slidesPerView: 15,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
      freeMode: true,
      speed: 4000,

    })

    swiper2.on('slideChange', function () {
    })
  }
}

export default Partners
