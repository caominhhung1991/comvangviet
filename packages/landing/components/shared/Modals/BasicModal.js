import './Modal.scss'
import React from 'react';
import Modal, {ModalBody, ModalFooter, ModalHeader} from './Modal'

const BasicModal = props => {
  const {onOk, children, title, isFooter} = props

  return (
    <Modal
      {...props}
    >
      <ModalHeader>
        <h3>{title}</h3>
        <button type="button" className="close" aria-label="Close" data-dismiss="modal">
          <span aria-hidden="true">&times;</span>
        </button>
      </ModalHeader>
      <ModalBody>
        {children}
      </ModalBody>
      {
        isFooter && <React.Fragment>
          <ModalFooter>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </ModalFooter>
        </React.Fragment>
      }
    </Modal>
  );
}

BasicModal.defaultProps = {
  isFooter: true
}

BasicModal.propTypes = {}

export default BasicModal;