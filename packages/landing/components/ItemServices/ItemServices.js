import React, {Component} from 'react'
import './ItemServices.scss'
import ItemService from './ItemService/ItemService';
import Title from '../shared/Title/Title';

export class ItemServices extends Component {
  render() {
    return (
      <React.Fragment>
        <Title title={"Sản Phẩm - Dịch vụ"}/>
        <div className="ItemServices">
          <ItemService image={"bep_an_cong_nghiep"} title={"bếp ăn công nghiệp"}/>
          <ItemService image={"can_tin"} title={"bếp ăn trường học"}/>
          <ItemService image={"to_chuc_tiec"} title={"tổ chức tiệc"}/>
          <ItemService image={"dich_vu_khac"} title={"dịch vụ khác"}/>
        </div>
      </React.Fragment>
    )
  }
}

export default ItemServices
