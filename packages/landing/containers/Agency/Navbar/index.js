import React, { useContext } from "react";
import PropTypes from "prop-types";
import { closeModal, openModal } from "@redq/reuse-modal";
import NavbarWrapper from "reusecore/src/elements/Navbar";
import Drawer from "reusecore/src/elements/Drawer";
import Button from "reusecore/src/elements/Button";
import Logo from "reusecore/src/elements/UI/Logo";
import HamburgMenu from "common/src/components/HamburgMenu";
import ScrollSpyMenu from "common/src/components/ScrollSpyMenu";
import { Container } from "./navbar.style";
import LoginModal from "../LoginModal";
import CopyrightSection from "../CopyrightsSection";

import LogoImage from "common/src/assets/image/agency/logo.png";

import { DrawerContext } from "common/src/contexts/DrawerContext";

import { DATA } from "common/src/constants/appConstants";

const CloseModalButton = () => (
  <Button
    className='modalCloseBtn'
    variant='fab'
    onClick={() => closeModal()}
    icon={<i className='flaticon-plus-symbol'/>}
  />
);

const CloseModalButtonAlt = () => (
  <Button
    className='modalCloseBtn alt'
    variant='fab'
    onClick={() => closeModal()}
    icon={<i className='flaticon-plus-symbol'/>}
  />
);

const Navbar = ({ navbarStyle, logoStyle }) => {
  const { state, dispatch } = useContext(DrawerContext);


  const handleLoginModal = () => {
    openModal({
      config: {
        className: "login-modal",
        disableDragging: true,
        width: "100%",
        height: "100%",
        animationFrom: { transform: "translateY(100px)" }, // react-spring <Spring from={}> props value
        animationTo: { transform: "translateY(0)" }, //  react-spring <Spring to={}> props value
        transition: {
          mass: 1,
          tension: 180,
          friction: 26
        }
      },
      component: LoginModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true
    });
  };

  const toggleHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Logo
          href='#'
          logoSrc={LogoImage}
          title='Osac Food'
          logoStyle={logoStyle}
        />

        <div style={{ display: "flex", alignItems: "center" }}>
          {/**
           * Login Button: tạm thời ẩn */}
          {/*<Button*/}
            {/*variant='textButton'*/}
            {/*onClick={handleLoginModal}*/}
            {/*icon={<i className='flaticon-user'/>}*/}
            {/*aria-label='login'*/}
          {/*/>*/}

          <Drawer
            width='420px'
            placement='right'
            drawerHandler={<HamburgMenu/>}
            open={state.isOpen}
            toggleHandler={toggleHandler}
          >
            <ScrollSpyMenu
              menuItems={DATA.getMenuItems()}
              drawerClose={true}
              offset={-100}
            />
            <CopyrightSection/>
          </Drawer>
        </div>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object
};

Navbar.defaultProps = {
  // Default navbar style
  navbarStyle: {
    minHeight: "70px"
  },
  // Default logo size
  logoStyle: {
    width: "128px",
    height: "auto"
  }
};

export default Navbar;
