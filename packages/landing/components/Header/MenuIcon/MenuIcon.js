import React from 'react'
import './MenuIcon.scss'

const MenuIcon = props => {
  let menuIconClass = props.isClicked === true ? "MenuIcon Open" : "MenuIcon";
  return (
    <div className={menuIconClass} onClick={props.clickHandle}>
      <span className="MenuIcon__Span"/>
      <span className="MenuIcon__Span"/>
      <span className="MenuIcon__Span"/>
    </div>
  )
}


export default MenuIcon
