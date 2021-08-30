import React from 'react'
import './Introduce.scss'
import {Controller, Scene} from 'react-scrollmagic';
import {Timeline, Tween} from 'react-gsap';

// const osacBG = 'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fsuat-an-cong-nghiep-bg.jpg?alt=media&token=d2563a35-56d1-47d5-a3aa-db07fcb5eeb4'
const osacBG = 'https://bazaarvietnam.vn/wp-content/uploads/2020/01/nau-an-voi-hoa-01-hoa-pansy.jpg'

const Introduce = () => (
  <Controller>
    <Scene duration="300%" triggerHook="onEnter">
      <Timeline wrapper={<div className="parallax"/>}>
        <Tween position="0"
               from={{yPercent: -50,}}
               to={{yPercent: 0,}}
        >
          <img src={osacBG} alt="osac service"/>
        </Tween>
      </Timeline>
    </Scene>
  </Controller>
);

export default Introduce
