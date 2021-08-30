import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Sidebar.scss';

const logo = '/static/logo.gif';

const propsTypes = {
  isClicked: PropTypes.bool,
  clickHandle: PropTypes.func,
}

let sidebar;
let overlay;

export class Sidebar extends Component {
  openSidebar = () => {
    sidebar.style.transform = "translateX(0px)";
    overlay.style.display = "block";
  }

  closeSidebar = () => {
    sidebar.style.transform = "translateX(-280px)";
    overlay.style.display = "none";
  }

  render() {
    return (
      <React.Fragment>
        <div id="sidebar01" className="SideNav">
          <div className="SideNav__Menu__Header">
            <img className="Header__Logo mr-2" src={logo} alt="OSAC LOGO"/>
            Osac Service
          </div>
          <hr/>
          <a onClick={() => {
            this.closeSidebar();
            this.props.clickHandle();
          }} className="SideNav__Link" href="/">Trang Chủ</a>
          <hr/>
          <a onClick={() => {
            this.closeSidebar();
            this.props.clickHandle();
          }} className="SideNav__Link" href="/">Giới thiệu</a>
          <hr/>
          <a onClick={() => {
            this.closeSidebar();
            this.props.clickHandle();
          }} className="SideNav__Link" href="/">Dịch vụ</a>
          <hr/>
          <a onClick={() => {
            this.closeSidebar();
            this.props.clickHandle();
          }} className="SideNav__Link" href="/">Tin Tức</a>
          <hr/>
          <a onClick={() => {
            this.closeSidebar();
            this.props.clickHandle();
          }} className="SideNav__Link" href="/">Tuyển dụng</a>
          <hr/>
          <a onClick={() => {
            this.closeSidebar();
            this.props.clickHandle();
          }} className="SideNav__Link" href="/">Liên hệ</a>
          <hr/>
        </div>
        <div id="sidebar_overlay" onClick={this.props.clickHandle}>
        </div>
      </React.Fragment>
    )
  }

  componentDidMount = () => {
    sidebar = document.getElementById("sidebar01");
    overlay = document.getElementById("sidebar_overlay");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {isClicked} = this.props
    if (isClicked) {
      this.openSidebar();
    } else {
      this.closeSidebar();
    }
  }
}

Sidebar.propsTypes = propsTypes;

export default Sidebar
