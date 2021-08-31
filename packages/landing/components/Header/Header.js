import React, {useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import dynamic from 'next/dynamic'
import './Header.scss'
import {PAGES} from "../../constants/app-constants";

import MenuIcon from './MenuIcon/MenuIcon'
import Sidebar from './Sidebar/Sidebar'

const flag_english = '/static/img/flag_english.png'
const flag_vietnam = 'static/img/flag_vietnam.png'

const Header = props => {
  const [page, setPage] = useState(PAGES.TRANG_CHU)
  const [isClicked, _setClicked] = useState(false)
  const [isChoosedFlagVN, _setChoosedFlagVN] = useState(true)
  const router = useRouter()
  const asPath = router.asPath
  // console.log({asPath})

  const _clickMenuIconHandle = () => {
    _setClicked(!isClicked)
  }

  const _chooseFlagHandle = (flag) => {
    _setChoosedFlagVN(flag !== 'english')
  }

  let flagVNClass = isChoosedFlagVN === true ? 'Header__Flag__Choosed' : ''
  let flagENClass = isChoosedFlagVN === false ? 'Header__Flag__Choosed' : ''

  let trangChuClass = asPath === PAGES.TRANG_CHU ? 'Header__Nav__Item Active' : 'Header__Nav__Item'
  let gioiThieuClass = asPath === PAGES.GIOI_THIEU ? 'Header__Nav__Item Active' : 'Header__Nav__Item'
  let dichVuClass = asPath === PAGES.DICH_VU ? 'Header__Nav__Item Active' : 'Header__Nav__Item'
  let tinTucClass = asPath === PAGES.TIN_TUC ? 'Header__Nav__Item Active' : 'Header__Nav__Item'
  let tuyenDungClass = asPath === PAGES.TUYEN_DUNG ? 'Header__Nav__Item Active' : 'Header__Nav__Item'
  let lienHeClass = asPath === PAGES.LIEN_HE ? 'Header__Nav__Item Active' : 'Header__Nav__Item'

  return (
    <div className="Header">
      <div className="Header__Contact">
        <a className="Header__Contact__Link" href='https://www.facebook.com/comvangviet' target='_blank'>
          <i className="fa fa-facebook-official"/> <span className="Header__Contact__Content">comvangviet.com</span>
        </a>

        <span>|</span>
        <a className="Header__Contact__Link" href="tel:0363575468">
          <i className="fa fa-phone"/> <span className="Header__Contact__Content">(+84) 363.575.468</span>
        </a>

        <span>|</span>
        <a className="Header__Contact__Link" href="tel:0765661626 ">
          <i className="fa fa-phone"/> <span className="Header__Contact__Content">(+84) 765.661.626 </span>
        </a>

        <span>|</span>
        <a className="Header__Contact__Link" href="mailto:sales@comvangviet.com">
          <i className="fa fa-envelope"/> <span className="Header__Contact__Content">sales@comvangviet.com</span>
        </a>
      </div>

      <div className="Header__Navigation">
        <Link href={'/'}><img className="Header__Logo" src='/static/logo.png' alt="COM VANG VIET LOGO"/></Link>
        <div className="Header__Nav">

          <Link href={PAGES.TRANG_CHU}>
            <a className={trangChuClass} onClick={() => setPage(PAGES.TRANG_CHU)}>Trang Chủ</a>
          </Link>

          <Link href={PAGES.GIOI_THIEU}>
            <a className={gioiThieuClass} onClick={() => setPage(PAGES.GIOI_THIEU)}>Giới thiệu</a>
          </Link>

          {/*<Link href={PAGES.DICH_VU}>*/}
            {/*<a className={dichVuClass} onClick={() => setPage(PAGES.DICH_VU)}>Dịch vụ</a>*/}
          {/*</Link>*/}

          {/*<Link href={PAGES.TRANG_CHU}>*/}
            {/*<a className={tinTucClass} onClick={() => setPage(PAGES.TIN_TUC)}>Tin Tức</a>*/}
          {/*</Link>*/}

          <Link href={PAGES.TUYEN_DUNG}>
            <a className={tuyenDungClass} onClick={() => setPage(PAGES.TUYEN_DUNG)}>Tuyển dụng</a>
          </Link>

          <Link href={PAGES.LIEN_HE}>
            <a className={lienHeClass} onClick={() => setPage(PAGES.LIEN_HE)}>Liên hệ</a>
          </Link>
        </div>

        <div className="Header__Flag">
          <img
            className={['Header__Flag__Item', flagVNClass].join(' ')}
            src={flag_english} alt="OSAC Service"
            onClick={() => _chooseFlagHandle('english')}
          />
          <img
            className={['Header__Flag__Item', flagENClass].join(' ')}
            src={flag_vietnam} alt="OSAC Service"
            onClick={() => _chooseFlagHandle('vietnam')}
          />
        </div>

        <MenuIcon isClicked={isClicked} clickHandle={_clickMenuIconHandle}/>
        <Sidebar isClicked={isClicked} clickHandle={_clickMenuIconHandle}/>
      </div>
    </div>
  )
}

export default Header
