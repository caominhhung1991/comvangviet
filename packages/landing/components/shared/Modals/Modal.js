import React from 'react';

export const ModalHeader = props => {
  return <div className="modal-header">{props.children}</div>;
};

export const ModalBody = props => {
  return <div className="modal-body">{props.children}</div>;
};

export const ModalFooter = props => {
  return <div className="modal-footer">{props.children}</div>;
};

const Modal = props => {
  const {size, children, center} = props

  const sizes = {
    small: 'sm',
    large: 'lg',
  }

  return (
    <div className={'modal fade'} tabIndex="-1" role="dialog" aria-hidden="true" id='modal'>
      <div
        className={`modal-dialog ${sizes[size] ? `modal-${sizes[size]}` : ''} ${center ? 'modal-dialog-centered' : ''}`}
        role="document"
      >
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
}

Modal.defaultProps = {
  center: false,
};
Modal.propTypes = {};

export default Modal;