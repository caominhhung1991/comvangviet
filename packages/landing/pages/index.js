import React from 'react'
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/withLayout'

const SliderHeader = dynamic(() => import('../components/Slider/SliderHeader'))
const Introduce = dynamic(() => import('../components/Introduce/Introduce'))
const Story = dynamic(() => import('../components/Story/Story'))
const ItemServices = dynamic(() => import('../components/ItemServices/ItemServices'))
const Reason = dynamic(() => import('../components/Reason/Reason'))
const News = dynamic(() => import('../components/News/News'))
const Partners = dynamic(() => import('../components/Partners/Partners'))

const Index = (props) => {
  return (
    <Layout>
      <link rel='stylesheet' href='https://unpkg.com/swiper/swiper-bundle.min.css'/>
      <link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet"/>

      <SliderHeader/>

      <Introduce/>

      <Story/>

      <ItemServices/>

      <Reason/>

      {/*<News {...props} />*/}

      <Partners {...props} />
    </Layout>
  )
}

Index.getInitialProps = async function () {
  const res = await fetch('https://osac-a381e.firebaseio.com/website/tintucs.json')
  const tintucs = await res.json()
  return {
    tintucs,
  }
}

export default Index
