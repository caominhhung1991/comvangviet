import React, { useState } from "react";
import "./Footer.scss";
import Link from "next/link";
import { PAGES } from "../../constants/app-constants";
import MyGoogleMap, { diadiems } from "../shared/MyGoogleMap/MyGoogleMap";

const Footer = () => {
  const [_diadiem, _setDiadiem] = useState(diadiems.vanphong);

  const isVanPhong = diadiems.vanphong.id === _diadiem.id;
  const isXuongSX = diadiems.xuongSX.id === _diadiem.id;

  return (
    <div className='Footer'>
      <div className='Footer__Website'>
        <h2 className='Footer__Website__Company'>Cơm Vàng Việt</h2>
        <h4 className='Footer__Website__Address'>comvangviet.com</h4>
      </div>

      <div className='Footer__Content'>
        <div className='Footer__Content__Left'>
          <div className='Footer__Column Footer__Column1'>
            <div className='Footer__Title'>Liên hệ</div>
            <a className='Footer__Info' href='tel:0363575468'>
              <div className='Footer__Info__Icon'><i className='fa fa-phone'/></div>
              <div className='Footer__Info__Text'>(+84) 363.575.468</div>
            </a>
            <a className='Footer__Info' href='tel:0765661626 '>
              <div className='Footer__Info__Icon'><i className='fa fa-phone'/></div>
              <div className='Footer__Info__Text'>(+84) 765.661.626</div>
            </a>
            <a className='Footer__Info' href='http://osac.vn'>
              <div className='Footer__Info__Icon'><i className='fa fa-desktop'/></div>
              <div className='Footer__Info__Text'>comvangviet.com</div>
            </a>
            <a className='Footer__Info' href='mailto:hoangviet@osac.vn?subject=Subject Using Mailto.co.uk&body=Email Using Body'>
              <div className='Footer__Info__Icon'><i className='fa fa-envelope'/></div>
              <div className='Footer__Info__Text'>sales@comvangviet.com</div>
            </a>

            <div className='Footer__Info'>
              <div className='Footer__Info__Icon'>
                <i className='fa fa-address-book'/>
              </div>
              <div className='Footer__Info__Text Footer__Address'>
                <div className='Footer__Address__Title'>VĂN PHÒNG CƠM VÀNG VIỆT</div>
                <div className='Footer__Address__Content'>
                  Số F5, KDC Tân Biên, P. Tân Biên, TP Biên Hòa, T. Đồng Nai
                </div>
              </div>
            </div>

            {/*<div className='Footer__Info'>*/}
            {/*<div className='Footer__Info__Icon'>*/}
            {/*<i className='fa fa-truck'/>*/}
            {/*</div>*/}
            {/*<div className='Footer__Info__Text Footer__Address'>*/}
            {/*<div className='Footer__Address__Title'>CHI NHÁNH OSAC BÌNH DƯƠNG</div>*/}
            {/*<div className='Footer__Address__Content'>40 Đường số 3, P. Hòa Phú, Tp. Thủ Dầu Một, Bình Dương</div>*/}
            {/*</div>*/}
            {/*</div>*/}
          </div>

          <div className='Footer__Column Footer__Column2'>
            <div className='Footer__Title'>Menu</div>
            <div className='Footer__Menu'>
              <div className='Footer__Info__Text'>
                <Link href={PAGES.TRANG_CHU}><a className='Footer__Menu__Link'>Trang chủ</a></Link>
              </div>
            </div>

            <div className='Footer__Menu'>
              <div className='Footer__Info__Text'>
                <Link href={PAGES.GIOI_THIEU}><a className='Footer__Menu__Link'>Giới thiệu</a></Link>
              </div>
            </div>

            <div className='Footer__Menu'>
              <div className='Footer__Info__Text'>
                <Link href={PAGES.DICH_VU}><a className='Footer__Menu__Link'>Dịch vụ</a></Link>
              </div>
            </div>

            {/*<div className='Footer__Menu'>*/}
            {/*<div className='Footer__Info__Text'>*/}
            {/*<Link href={PAGES.DICH_VU}><a className='Footer__Menu__Link'>Tin tức</a></Link>*/}
            {/*</div>*/}
            {/*</div>*/}

            <div className='Footer__Menu'>
              <div className='Footer__Info__Text'>
                <Link href={PAGES.TUYEN_DUNG}><a className='Footer__Menu__Link'>Tuyển dụng</a></Link>
              </div>
            </div>
          </div>

          <div className='Footer__Column Footer__Column3'>
            <div className='Footer__Title'>Mạng xã hội</div>
            <div className='Footer__Menu'>
              <div className='Footer__Info'>
                <div className='Footer__Info__Icon'><i className='fa fa-facebook-official'/></div>
                <div className='Footer__Info__Text'>
                  <a className='Footer__Menu__Link' href='https://www.facebook.com/comvangviet' target='_blank'>Facebook</a>
                </div>
              </div>
            </div>

            <div className='Footer__Menu'>
              <div className='Footer__Info'>
                <div className='Footer__Info__Icon'><i className='fa fa-instagram'/></div>
                <div className='Footer__Info__Text'>
                  <a className='Footer__Menu__Link' href='https://www.instagram.com/comvangviet/' target='_blank'>Instagram</a>
                </div>
              </div>
            </div>

            <div className='Footer__Menu'>
              <div className='Footer__Info'>
                <div className='Footer__Info__Icon'><i className='fa fa-youtube'/></div>
                <div className='Footer__Info__Text'>
                  <a className='Footer__Menu__Link' href='https://www.youtube.com/channel' target='_blank'>Youtube</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='Footer__Content__Right'>
          <div className='map__title'>
            <div
              className={["map__title__item", isVanPhong ? "map--active" : ""].join(" ")}
              onClick={() => {
                _setDiadiem(diadiems.vanphong);
              }}>{String(diadiems.vanphong.name).toUpperCase()}</div>

            {/*<div*/}
            {/*className={['map__title__item', isXuongSX ? 'map--active' : ''].join(' ')}*/}
            {/*onClick={() => {*/}
            {/*_setDiadiem(diadiems.xuongSX)*/}
            {/*}}>{String(diadiems.xuongSX.name).toUpperCase()}</div>*/}
          </div>

          <MyGoogleMap place={_diadiem.id || diadiems.vanphong.id}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
