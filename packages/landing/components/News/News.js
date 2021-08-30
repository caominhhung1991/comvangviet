import React, {Component} from 'react'
import dynamic from 'next/dynamic'
import './News.scss'
import fetch from 'isomorphic-unfetch'
import Title from '../shared/Title/Title'
import Button from '../shared/Button/Button'

const NewsItem = dynamic(() => import('./NewsItem/NewsItem'))

const news_2 = '/static/img/news_2.jpg'
const news_3 = '/static/img/news_3.jpg'

const News = (props) => {
  return (
    <div className="News">
      <Title title={"Tin nổi bật"}/>
      <div className="News__Content">
        <NewsItem
          title={"Canape là gì? Những thông tin thú vị về Canape"}
          brief={""}
          image={"https://img.taste.com.au/8MQ39R4L/taste/2016/11/classic-canape-trio-90416-1.jpeg"}
        />
        <NewsItem
          title={"Chương trình Taste Of Australia 2018"}
          brief={""}
          image={news_2}
        />
        <NewsItem
          title={"Connect - Employee Newsletter 1"}
          brief={""}
          image={news_3}
        />
      </div>
      <div className="text-center mt-4">
        <Button
          text={"Xem tất cả"}
        />
      </div>

    </div>
  )
}

News.getInitialProps = async function() {
  console.log('heheh')
}

export default News
